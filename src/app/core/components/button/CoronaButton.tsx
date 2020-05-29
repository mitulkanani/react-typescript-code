import * as React from 'react';
import Button from "@material-ui/core/Button";

const CoronaButton: React.FunctionComponent<any> = (props) => {
    return (
        <Button
          {...props}
        >
            Next >
        </Button>
    )
};

export default CoronaButton;
