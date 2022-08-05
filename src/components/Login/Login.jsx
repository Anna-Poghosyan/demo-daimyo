import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { createField, Input } from "../common/FormsControls/FormsControl";
import authReducer, { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import classes from "./../common/FormsControls/FormsControl.module.css"

const LoginForm = ({handleSubmit, error}) => {
    
    return (
        <form onSubmit={handleSubmit}>
           
                {createField("Email", "email", [required], Input)}
                {createField("Password", "password", [required], Input, {type: "password"})}
                {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}
           
            { error && <div className={classes.formSummaryError }>{error}</div>}
            <div>
                <button>Log In</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if(props.isAuth) {
        return <Navigate  to = {"/profile"}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit= {onSubmit}/>
        </div>
}
const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth
})
export default connect(mapStateToProps, {login}) (Login);