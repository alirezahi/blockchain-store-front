import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    }
}));

const Header = ({setOpenDrawer}) => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                            onClick={() => setOpenDrawer(true)}>
                    <MenuIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header;