import React from 'react';
import { connect } from 'react-redux';
import { signIn,signOut } from '../actions';


class GoogleAuth extends React.Component{
    constructor(props){
        super(props);
        // this.state = {isSignedIn:null};
    }
    componentDidMount(){
        console.log('COMponentDIDMount')
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:"978579413834-oltjhft49rfk80uqjo5brqrsc6oibqid.apps.googleusercontent.com",
                scope:'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                // this.setState({isSignedIn:this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange);
            }).catch((err)=>{
                    console.log('ERROR');
                }    
            )
        })
    }

    onAuthChange = (isSignedIn)=>{
        // this.setState({isSignedIn:this.auth.isSignedIn.get()})
        if (isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut();
        }
    }

    handleRegistration = ()=>{
        // e.preventDefault();
        console.log("handleRegistration");
        if (this.props.isSignedIn){
            this.auth.signOut();
            console.log('signedOut')
            // this.setState({isSignedIn:this.auth.isSignedIn.get()});
        }else{
            this.auth.signIn();
            console.log('signedIn');
            // this.setState({isSignedIn:this.auth.isSignedIn.get()});
        }
    }

    renderAuthButton(){
        if (this.props.isSignedIn === null){
            return (
                <div></div>
            );
        }else if (this.props.isSignedIn){
            return (
                <div>
                    <button className = "ui red google button" onClick = {this.handleRegistration}>
                        <i className = "google icon"/>
                        SignOut
                    </button>
                </div>
            );
        }else{
            return (
                <div>
                    <button className = "ui blue google button" onClick = {this.handleRegistration}>
                        <i className = "google icon"/>
                        SignIn
                    </button>
                </div>
            );
        }
    }

    render(){
        return (
            <div>{this.renderAuthButton()}</div>
        );
    }
}
const mapStateToProps = (state)=>{
    return ({
        isSignedIn:state.auth.isSignedIn
    });
};
export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);