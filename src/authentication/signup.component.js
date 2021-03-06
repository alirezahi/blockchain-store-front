import React, {useContext, useState} from 'react';
import {makeStyles} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import authenticationService from "./authentication.service";
import {AuthenticationContext} from "./authentication.context";

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

const SignUpForm = ({handleClose}) => {
    const classes = useStyles();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setAuthToken} = useContext(AuthenticationContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await authenticationService.signup(firstName, lastName, email, password)
        setAuthToken(token)
        handleClose();
    };

    return (
        <form className={classes.root} onSubmit={handleSubmit}>
            <TextField
                label="First Name"
                variant="filled"
                required
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
            />
            <TextField
                label="Last Name"
                variant="filled"
                required
                value={lastName}
                onChange={e => setLastName(e.target.value)}
            />
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
                <Button type="submit" variant="contained" color="primary">
                    Signup
                </Button>
            </div>
        </form>
    );
};

export default SignUpForm;