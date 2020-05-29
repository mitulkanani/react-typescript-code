import * as React from 'react';
import Drawer from "@material-ui/core/Drawer";
import { makeStyles, Theme } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#0D517B"
    }
}));

const CoronaDrawer: React.FunctionComponent<any> = (props) => {
    const { container } = props;
    const classes: any = useStyles();
    return (
        <Drawer 
            {...props} 
            container={container}
            classes={{
                paper: classes.drawerPaper
            }}
            ModalProps={{
                keepMounted: true
            }}
        >
            { props.children }
        </Drawer>
    )
};

CoronaDrawer.propTypes = {
    container: PropTypes.instanceOf(
        typeof Element === "undefined" ? Object : Element
    )
};

export default CoronaDrawer;
