import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../actions';
import { Link } from 'react-router-dom';
class StreamList extends React.Component{

    renderList = ()=>{
        return this.props.streams.map((stream)=>{
            if (stream.userId === this.props.currentUserId){
                return (
                    <div className = "item"  key = {stream.id}>
                        <div className = "right floated  content">
                            <Link to = {`/StreamDelete/${stream.id}`} className = "ui button negative" >Delete</Link>
                            <Link to = {`/StreamEdit/${stream.id}`} className = "ui yellow button " >Edit</Link>
                        </div>
                        <i className = "large middle aligned icon camera"/>
                        <div className = "content">
                            <div className = "header">
                                <Link to = {`/StreamShow/${stream.id}`}>{stream.title}</Link>
                            </div>
                            <div className = "description">{stream.description}</div>
                        </div> 
                    </div>
                )
            }else{
                return (
                    <div className = "item"  key = {stream.id}>
                        <i className = "large middle aligned icon camera"/>
                        <div className = "content">
                            {stream.title}
                            <div className = "description">{stream.description}</div>
                        </div>
                    </div>
                )
            }
            
        });
    }

    componentDidMount = ()=>{
        this.props.fetchStreams();
    }

    renderCreateButton = ()=>{
        if(this.props.isSignedIn === true){
            return (
                <div style = {{float:"right",marginTop:"50px"}}>
                    <Link to = "/streamCreate"><button className = "ui button primary">Create Stream</button></Link>
                </div>
            );
        }
    }

    render = ()=>{

        return (
            <div>
                <h1>Streams</h1>
                <div className = "ui celled list">{this.renderList()}</div>
                {this.renderCreateButton()}
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return ({
        streams:Object.values(state.streams),
        currentUserId:state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    });
}

export default connect(mapStateToProps,{ fetchStreams })(StreamList);