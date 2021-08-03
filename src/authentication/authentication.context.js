import React from "react";

export const authentication = {
    token: null
}

export const AuthenticationContext = React.createContext({
        ...authentication,
        setAuthToken: () => {
        }
    }
);