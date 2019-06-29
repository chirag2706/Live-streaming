import React from 'react';
import Modal from '../components/modal';
import {connect} from 'react-redux';
import { deleteStream } from '../actions';
// import {StreamList} from './streamList'; 
class StreamDelete extends React.Component{
    // componentDidMount = ()=>{
    //     this.props.deleteStream(this.props.match.params.id);
    // }
    render(){
        return (
            <div>
                <Modal deleteStream = {this.props.deleteStream} id = {this.props.match.params.id}/>
            </div>
        );
    }
} 
export default connect(null,{deleteStream})(StreamDelete);