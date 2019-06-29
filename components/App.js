import React from 'react';
import { Router,Route } from 'react-router-dom';
import StreamCreate from '../stream/streamCreate';
import StreamShow from '../stream/streamShow';
import StreamDelete from '../stream/streamDelete';
import StreamEdit from '../stream/streamEdit';
import StreamList from '../stream/streamList';
import Header from './header';
import History from '../history';
class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className = "ui container">
                <Router history = {History}>
                    <div>
                        <Header />
                    </div>
                    <div>
                        <Route path = "/StreamCreate" exact component = {StreamCreate}></Route>
                        <Route path = "/StreamDelete/:id" exact component = {StreamDelete}></Route>
                        <Route path = "/StreamEdit/:id" exact component = {StreamEdit}></Route>
                        <Route path = "/StreamShow/:id" exact component = {StreamShow}></Route>
                        <Route path = "/" exact component = {StreamList}></Route>
                    </div>
                </Router>
            </div>
        );
    }
}
export default App;