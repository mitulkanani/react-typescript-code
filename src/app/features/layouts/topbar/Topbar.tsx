import * as React from 'react';
import Fade from "@material-ui/core/Fade";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {
    CoronaAppBar,
    CoronaToolbar,
    CoronaIconButton,
    CoronaBadge,
} from "./../../../core/components";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailIcon from "@material-ui/icons/Mail";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { people } from "helper/constant";

interface ITopbarProps {
    handleDrawerToggle: Function
}

const useStyles = makeStyles((theme: Theme) => ({
    grow: {
        flexGrow: 1
    }
}));

const Topbar: React.FunctionComponent<ITopbarProps> = (props) => {

    const [profile, setProfile] = React.useState(null);
    const classes: any = useStyles();

    const handleClickOnProfile = (event: any) => {
        setProfile(event.currentTarget);
    };

    const handleCloseOnProfile = () => {
        setProfile(null);
    };

    return (
        <CoronaAppBar position="fixed">
            <CoronaToolbar>
                <CoronaIconButton
                    color="inherit"
                    onClick={() => props.handleDrawerToggle()}
                >
                    <MenuIcon />
                </CoronaIconButton>
                <div className={classes.grow} />
                <div>
                    <div className="flex-x align-center">
                        <CoronaBadge
                            badgeContent=" "
                            variant="dot"
                            color="primary"
                        >
                            <NotificationsIcon className="icon--text" />
                        </CoronaBadge>
                        <div className="pl30">
                            <MailIcon className="icon--text" />
                        </div>
                        <div className="header-profile">
                            <img
                                src={people}
                                alt=""
                                onClick={handleClickOnProfile}
                            />
                            <Menu
                                anchorEl={profile}
                                open={Boolean(profile)}
                                onClose={handleCloseOnProfile}
                                TransitionComponent={Fade}
                            >
                                <MenuItem onClick={handleCloseOnProfile}>
                                    Profile
                                </MenuItem>
                                <MenuItem onClick={handleCloseOnProfile}>
                                    My account
                                </MenuItem>
                                <MenuItem onClick={handleCloseOnProfile}>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>
            </CoronaToolbar>
        </CoronaAppBar>
    )
};

export default Topbar;
