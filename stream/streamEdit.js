import React from 'react';
import { Field,reduxForm } from 'redux-form';
import {connect} from 'react-redux'
import {editStream,fetchStream} from '../actions'
var id;
class StreamEdit extends React.Component{

    componentDidMount = ()=>{
        this.props.fetchStream(this.props.match.params.id);
    }

    // id = this.props.match.params.id;
    renderError = (meta)=>{
        if (meta.touched && meta.error){
            return (
                <div className = "ui error message" style = {{display:"block"}}>
                    <div className = "header">{meta.error}</div>
                </div>
            )
        }
    }
    result = (formProps)=>{
        if (formProps.input.name === 'title'){
            return <input {...formProps.input} autoComplete = "off"/>
        }
        return <input {...formProps.input} autoComplete = "off"/>
    }


    renderInput = (formProps)=>{
        console.log(formProps);
        var name = "field";
        if (formProps.meta.error && formProps.meta.touched){
            name = `field error`;
        }
        console.log(this.props.stream);
        return (
            <div className = {name}>
                {this.renderError(formProps.meta)}
                <label> {formProps.label}</label>
                {this.result(formProps)}
            </div>
        )
        
    }
    onSubmit = (formProps)=>{
        console.log('value inside onsubmit');
        id = this.props.match.params.id;
        console.log(this.props.stream.title);
        console.log(this.props.stream.description);
        this.props.editStream(id,{...this.props.stream,...formProps});
    }

   

    render = ()=>{
        return (
            <div>
                <h1 style = {{textAlign:"center"}}>Edit Stream</h1>
                <div style = {{display:"flex",justifyContent:"center",alignContent:"center",marginTop:"25vh"}}>
                    <form className = "ui form " style = {{minWidth:"50%"}} onSubmit = {this.props.handleSubmit(this.onSubmit)}>
                        <Field name = "title" component = {this.renderInput} label = "Enter the title:"/>
                        <Field name = "description" component = {this.renderInput} label = "Enter description:"/>
                        <button className = "ui button" style = {{backgroundColor:"#CCAABB",color:"white",float:"right"}}>Edit</button>
                    </form>
                </div>
            </div>
            
        );
    }
} 
const validate = (formValues)=>{
    const errors = {};
    if (!formValues.title){
        errors.title = "You must enter the title";
    }
    if (!formValues.description){
        errors.description = "You must enter the description"
    }
    // console.log(errors);
    return errors;
}
const mapStateToProps = (state,ownProps)=>{
    console.log(state.streams[`${ownProps.match.params.id}`])
    return ({
        stream:state.streams[`${ownProps.match.params.id}`]
    })
}
export default connect(mapStateToProps,{editStream,fetchStream})(reduxForm({
    form:'editStream',
    validate
})(StreamEdit));