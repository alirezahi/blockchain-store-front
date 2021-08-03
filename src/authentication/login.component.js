import React, {useContext, useState} from 'react';
import {makeStyles} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {AuthenticationContext} from "./authentication.context";
import authenticationService from "./authentication.service";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '300px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },
    },
}));

const LoginForm = ({handleClose}) => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setToken} = useContext(AuthenticationContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await authenticationService.signup(email, password)
        setToken(token)
        handleClose();
    };

    return (
        <form className={classes.root} onSubmit={handleSubmit}>
            <TextField
                label="Email"
                variant="filled"
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <TextField
                label="Password"
                variant="filled"
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <div>
                <Button variant="contained" onClick={handleClose}>
                    Cancel
                </Button>
                <Button type="submit" variant="contained" color="primary">
                    Signup
                </Button>
            </div>
        </form>
    );
};

export default LoginForm;