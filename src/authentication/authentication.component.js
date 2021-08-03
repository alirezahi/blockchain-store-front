import React, {useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import SignUpForm from './signup.component';
import {Paper} from "@material-ui/core";
import LoginForm from "./login.component";

const SIGNUP_TYPE = 'signup'
const LOGIN_TYPE = 'login'
const AuthenticationlDialog = ({open, handleClose}) => {
    const [formType, changeType] = useState(SIGNUP_TYPE)
    const changeFormType = () => changeType(formType === SIGNUP_TYPE ? LOGIN_TYPE : SIGNUP_TYPE)
    const Form = (formType === SIGNUP_TYPE ? SignUpForm : LoginForm)

    return (
        <Dialog open={open}>
            <Paper>
                <Form handleClose={handleClose}/>
                <span onClick={changeFormType}>{formType === SIGNUP_TYPE ? 'Login' : 'Sign Up'}</span>
            </Paper>
        </Dialog>
    )
}

export default AuthenticationlDialog;