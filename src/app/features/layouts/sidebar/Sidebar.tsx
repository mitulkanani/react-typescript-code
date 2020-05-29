import * as React from 'react';
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import WidgetsIcon from "@material-ui/icons/Widgets";
import { NavLink } from "react-router-dom";

interface ISidebarProps {
    
}

const Sidebar: React.FunctionComponent<ISidebarProps> = (props) => {
    return (
        <div className="pt40">
            <List className="layout-drawer">
                <NavLink to="/application">
                    <ListItem button>
                        <ListItemIcon>{<WidgetsIcon />}</ListItemIcon>
                        <ListItemText
                            disableTypography
                            primary={
                                <Typography className="an-15">
                                    My Application
                                </Typography>
                            }
                        />
                    </ListItem>
                </NavLink>
                <NavLink to="/loan-dashboard">
                    <ListItem button>
                        <ListItemIcon>{<WidgetsIcon />}</ListItemIcon>
                        <ListItemText
                            disableTypography
                            primary={
                                <Typography className="an-15">
                                    Loan Dashboard
                                </Typography>
                            }
                        />
                    </ListItem>
                </NavLink>
            </List>
        </div>
    )
};

export default Sidebar;
