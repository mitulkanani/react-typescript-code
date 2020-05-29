import * as React from 'react';
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, Theme } from "@material-ui/core/styles";

interface ICoronaIconButtonProps {
    children?: React.ReactNode;
    className?: any; 
    position?: any;
    color?: "inherit" | "primary" | "secondary" | "default" | undefined;
    edge?: string;
    onClick?: any;
}

const useStyles = makeStyles((theme: Theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("lg")]: {
            display: "none"
        }
    }
}));

const CoronaIconButton: React.FunctionComponent<ICoronaIconButtonProps> = (props) => {
    const classes: any = useStyles();
    return (
        <IconButton 
            {...props} 
            edge="start"
            className={classes.menuButton}
        >
            { props.children }
        </IconButton>
    )
};

export default CoronaIconButton;
