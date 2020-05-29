import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles, useTheme, Theme } from "@material-ui/core/styles";
import { whiteLogo } from "helper/constant";
import { Route, Switch } from "react-router-dom";
import dashRoutes from "routes/dashRoutes";
import classNames from "classnames";
import {
    CoronaDrawer
} from "./../../core/components";
import Topbar from './topbar/Topbar';
import Sidebar from './sidebar/Sidebar';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex"
    },
    drawer: {
        [theme.breakpoints.up("lg")]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        marginTop: "65px",
        minHeight: "90vh",
        padding: theme.spacing(4),
        backgroundColor: "#F9F9F9"
    },
    grow: {
        flexGrow: 1
    }
}));

function DashboardLayouts(props: any) {
    const classes: any = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classNames(classes.toolbar, "sidebar-logo")}>
                <img src={whiteLogo} alt="logo" />
            </div>
            <Divider className="sidebar-devider" />
            <Sidebar/>
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Topbar handleDrawerToggle={handleDrawerToggle}/>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden mdUp implementation="css">
                    <CoronaDrawer
                        variant="temporary"
                        anchor={theme.direction === "rtl" ? "right" : "left"}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                    >
                        { drawer }
                    </CoronaDrawer>
                </Hidden>
                <Hidden mdDown implementation="css">
                    <CoronaDrawer variant="permanent" open>
                        { drawer }
                    </CoronaDrawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <Switch>
                    {dashRoutes.map((prop, key) => {
                        return (
                            <Route
                                path={prop.path}
                                component={prop.component}
                                key={key}
                            />
                        );
                    })}
                </Switch>
            </main>
        </div>
    );
}

export default DashboardLayouts;
