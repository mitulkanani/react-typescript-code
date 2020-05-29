import * as React from 'react';
import Slider from "@material-ui/core/Slider";

export interface ICoronaSliderProps {
    marks?: Array<any>,
    defaultValue?: Array<any>,
    value?: any;
    getAriaValueText?: any,
    track?: any;
    id: string;
    onChange?: any;
}

export default function CoronaSlider (props: ICoronaSliderProps) {
    return (
        <Slider
            {...props}
            aria-labelledby="track-false-range-slider"
        />
    );
}
