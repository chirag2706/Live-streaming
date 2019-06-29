import React from 'react';
import { Field,reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../actions';
class StreamCreate extends React.Component{

    renderError = (meta)=>{
        if (meta.touched && meta.error){
            return (
                <div className = "ui error message" style = {{display:"block"}}>
                    <div className = "header">{meta.error}</div>
                </div>
            )
        }
    }

    renderInput = (formProps)=>{
        // console.log(formProps.meta);
        var name = "field";
        if (formProps.meta.error && formProps.meta.touched){
            name = `field error`;
        }
        return (
            <div className = {name}>
                {this.renderError(formProps.meta)}
                <label> {formProps.label}</label>
                <input {...formProps.input} autoComplete = "off"/>
            </div>
        )
        
    }
    onSubmit = (formProps)=>{
        console.log('zig');
        console.log(formProps);
        this.props.createStream(formProps);
    }

    render = ()=>{
        return (
            <div>
                <h1 style = {{textAlign:"center"}}>Create Stream</h1>
                <div style = {{display:"flex",justifyContent:"center",alignContent:"center",marginTop:"25vh"}}>
                    
                    <form className = "ui form " style = {{minWidth:"50%"}} onSubmit = {this.props.handleSubmit(this.onSubmit)}>
                        <Field name = "title" component = {this.renderInput} label = "Enter the title:"/>
                        <Field name = "description" component = {this.renderInput} label = "Enter description:"/>
                        <button className = "ui button" style = {{backgroundColor:"#67A0AF",color:"white",float:"right"}}>Submit</button>
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

const mapStateToProps = (state)=>{
    return (
        {

        }
    );
}

export default connect(null,{createStream})(reduxForm({
    form:'createStream',
    validate
})(StreamCreate));