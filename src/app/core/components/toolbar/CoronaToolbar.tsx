import * as React from 'react';
import Toolbar from "@material-ui/core/Toolbar";

const CoronaToolbar: React.FunctionComponent<any> = (props) => {
    return (
        <Toolbar {...props}>
            { props.children }
        </Toolbar>
    )
};

export default CoronaToolbar;
