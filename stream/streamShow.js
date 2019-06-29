import React from 'react';
import {connect} from 'react-redux';
import {fetchStream} from '../actions';
import flv from 'flv.js';
class StreamShow extends React.Component{
    constructor(props){
        super(props);
        this.reactRef = React.createRef();
    }
    componentDidMount = ()=>{
        this.props.fetchStream(this.props.match.params.id);
        this.player = flv.createPlayer({
            type:'flv',
            url: `http://localhost:8000/live/${this.props.match.params.id}.flv`,
        });
        this.player.attachMediaElement(this.reactRef.current);
        this.player.load();
    }
    render(){
        if (!this.props.stream){

            return (
                <div>
                    <video ref = {this.reactRef} style = {{width:"100%",marginTop:"4%"}} controls/>
                    <div>Loading...</div>
                </div>
            )
        }
        return (
            <div>
                <video ref = {this.reactRef} style = {{width:"100%",marginTop:"4%"}} controls/>
                <h1>{this.props.stream.title}</h1>
                <h3>{this.props.stream.description}</h3>
            </div>
        );
    }
} 

const mapStateToProps = (state,ownProps)=>{

    return ({
        stream:state.streams[`${ownProps.match.params.id}`]
    });
}
export default connect(mapStateToProps,{fetchStream})(StreamShow);