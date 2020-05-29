import * as React from 'react';
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(0),
        minWidth: "100%",
        fontWeight: 600,
        fontSize: "15px"
    }
}));

const CoronaFormControl: React.FunctionComponent<any> = (props) => {
    const classes = useStyles();
    return (
        <FormControl {...props} className={classes.formControl}>
            {props.children}
        </FormControl>
    )
};

export default CoronaFormControl;
