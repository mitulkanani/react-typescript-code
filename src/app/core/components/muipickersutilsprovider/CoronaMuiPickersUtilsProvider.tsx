import * as React from 'react';
import {
    MuiPickersUtilsProvider
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

interface ICoronaMuiPickersUtilsProviderProps {
}

const CoronaMuiPickersUtilsProvider: React.FunctionComponent<ICoronaMuiPickersUtilsProviderProps> = (props) => {
    return (
        <MuiPickersUtilsProvider
            {...props}
            utils={DateFnsUtils}
        >
            {props.children}
        </MuiPickersUtilsProvider>
    );
};

export default CoronaMuiPickersUtilsProvider;
