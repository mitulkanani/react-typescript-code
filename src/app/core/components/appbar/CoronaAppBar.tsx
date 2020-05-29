import * as React from 'react';
import AppBar from "@material-ui/core/AppBar";
import { makeStyles, Theme } from "@material-ui/core/styles";

interface ICoronaAppBarProps {
    children?: React.ReactNode;
    className?: any; 
    position?: any; 
}

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex"
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    appBar: {
        backgroundColor: "#fff",
        boxShadow: "0 1px 10px 0 rgba(0,0,0,0.1)",
        [theme.breakpoints.up("lg")]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#0D517B"
    },
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

const CoronaAppBar: React.FunctionComponent<ICoronaAppBarProps> = (props) => {
    const classes: any = useStyles();
    return (
        <AppBar {...props} className={classes.appBar}>
            { props.children }
        </AppBar>
    )
};

export default CoronaAppBar;
