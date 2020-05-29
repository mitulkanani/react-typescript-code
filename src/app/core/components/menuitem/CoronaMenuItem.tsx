import * as React from 'react';
import MenuItem from "@material-ui/core/MenuItem";

interface ICoronaMenuItemProps {
    value: any
}

const CoronaMenuItem: React.FunctionComponent<ICoronaMenuItemProps> = (props) => {
    return (
        <MenuItem {...props}>
            {props.children}
        </MenuItem>
    );
};

export default CoronaMenuItem;
