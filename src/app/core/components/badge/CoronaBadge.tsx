import * as React from 'react';
import Badge from "@material-ui/core/Badge";

const CoronaBadge: React.FunctionComponent<any> = (props) => {
    return (
        <Badge 
            {...props} 
        >
            { props.children }
        </Badge>
    )
};

export default CoronaBadge;
