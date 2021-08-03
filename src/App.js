import './App.css';
import React from 'react';
import Header from './appBar'
import DrawerComponent from "./drawer";
import AuthenticationDialog, {AUTH_TOKEN_KEY_NAME, AuthenticationContext} from './authentication'

import {BrowserRouter as Router, Switch} from "react-router-dom";


const App = () => {
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const [token, setToken] = React.useState(localStorage.getItem(AUTH_TOKEN_KEY_NAME));
    const [openAuthenticationModal, setOpenAuthenticationModal] = React.useState(token === null);

    const handleCloseAuthenticationModal = () => setOpenAuthenticationModal(false)
    const setAuthToken = (token) => {
        setToken(token);
        localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
    }

    return (
        <AuthenticationContext.Provider value={{token, setAuthToken}}>
            <div className="App">
                <Header setOpenDrawer={setOpenDrawer}/>
                <AuthenticationDialog open={openAuthenticationModal} handleClose={handleCloseAuthenticationModal}/>
                <Router>
                    <Switch/>
                    <DrawerComponent open={openDrawer} setOpen={setOpenDrawer}/>
                </Router>
            </div>
        </AuthenticationContext.Provider>

    );
}

export default App;
