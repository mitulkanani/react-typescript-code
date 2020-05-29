import * as React from 'react';
import Select from "@material-ui/core/Select";

const CoronaSelect: React.FunctionComponent<any> = (props) => {
    return (
        <Select
            {...props}
        >
            {props.children}
        </Select>
    );
};

export default CoronaSelect;
