import * as React from 'react';
import {
    KeyboardDatePicker
} from "@material-ui/pickers";

const CoronaKeyboardDatePicker: React.FunctionComponent<any> = (props) => {
  return (
    <KeyboardDatePicker
        {...props}
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        label="Date of Birth *"
        KeyboardButtonProps={{
            "aria-label": "change date"
        }}
    />
  );
};

export default CoronaKeyboardDatePicker;
