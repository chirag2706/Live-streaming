import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

class Modal extends React.Component{

    render = ()=>{
        return (
            ReactDOM.createPortal(
                <div className = "ui dimmer modals visible active" id = "tea" style = {{background:"rgba(0 ,0 ,0 ,0.35)"}}>
                    <div className = "ui standard modal visible active" style = {{textAlign:"center",paddingTop:"10%",paddingBottom:"10%",paddingLeft:"5%",paddingRight:"5%",borderRadius:"50%"}}>
                        <h1 style = {{textAlign:"center",fontSize:"60px",color:"gray"}}>Delete Stream</h1>
                        <div style = {{textAlign:"center",color:"red",fontSize:"30px"}}>Are U sure ,U want to delete this stream??</div>
                        <div style = {{marginTop:"30px"}} >
                            <button className = "ui button primary" onClick = {()=>{
                                history.push("/");
                            }}>Cancel</button>
                            <button className = "ui red button" onClick = {()=>{
                                console.log(this.props.deleteStream);
                                console.log(this.props.id)
                                this.props.deleteStream(this.props.id);
                                history.push("/");
                            }}>Delete</button>
                        </div>
                    </div>
                    
                </div>,document.querySelector('#modal')
            )
        );
    }
}

export default Modal;