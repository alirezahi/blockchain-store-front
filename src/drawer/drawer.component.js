import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Link} from "react-router-dom";
import React from "react";

const DrawerComponent = (props) => {
    const onClose = () => props.setOpen(false)

    return (
        <Drawer anchor={'left'} open={props.open} onClose={onClose}>
            <List>
                <ListItem>
                    <Link to={'/set-parameters'}>
                            <span>
                                set parameters
                            </span>
                    </Link>
                </ListItem>

                <ListItem>
                    <Link to={'/real-time-monitoring'}>
                            <span>
                                real time monitoring
                            </span>
                    </Link>
                </ListItem>


                <ListItem>
                    <Link to={'/pvs-logs'}>
                            <span>
                                system pvs logs
                            </span>
                    </Link>
                </ListItem>

                <ListItem>
                    <Link to={'/pressures-logs'}>
                            <span>
                                pressures logs
                            </span>
                    </Link>
                </ListItem>

                <ListItem>
                    <Link to={'/thermometer-logs'}>
                            <span>
                                thermometer logs
                            </span>
                    </Link>
                </ListItem>
            </List>
        </Drawer>
    )
}

export default DrawerComponent