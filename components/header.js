import React from 'react';
import { Link } from 'react-router-dom'
import GoogleAuth from './googleAuth';
// client-Id = 978579413834-oltjhft49rfk80uqjo5brqrsc6oibqid.apps.googleusercontent.com
class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div >
                <div className = "ui primary pointing menu">
                    <div>
                        <Link to = "/streamCreate" className = "item" style = {{paddingTop:"25%",paddingBottom: "25%"}}>
                            Create Stream
                        </Link>
                    </div>
                    <div className = "right menu">
                        <div>
                            <Link to = "/" className = "item" style = {{paddingTop:"30%",paddingBottom: "30%"}}>
                                All streams
                            </Link>
                        </div>
                        <div>
                            <Link to = "/streamCreate" className = "item" style = {{paddingTop:"13%",paddingBottom: "13%"}}>
                                <GoogleAuth/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header