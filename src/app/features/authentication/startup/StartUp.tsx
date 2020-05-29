import React, { ChangeEvent } from "react";
import { whiteLogo, homeScreenArrow } from "./../../../../helper/constant";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withRouter, RouteComponentProps } from "react-router-dom";
import {
    CoronaSlider,
    CoronaButton,
    CoronaFormControl,
    CoronaTextField,
    CoronaSelect,
    CoronaMenuItem
} from "app/core/components";
import { InjectedFormikProps } from "formik";
import enhancer from './validator'

type marksType = {
    value: Number,
    label: String
};
interface FormValues{
    fundUse: string;
    constitution: string;
    purpose: string;
    loanAmount: string;
    others: any;
}

const marks: marksType[] = [
    {
        value: 1,
        label: "1L"
    },
    {
        value: 100,
        label: "5L"
    }
];

const valuetext = (value: Number) => {
    return `${value}L`;
};

const StartUp: React.FunctionComponent<InjectedFormikProps<RouteComponentProps, FormValues>> = props => {
    
    const {
        handleChange,
        handleBlur,
        errors,
        touched,
        setFieldValue,
        isValid,
        values,
        handleSubmit
	} = props;

    const submitValues = () => {
        console.log(errors);
        if (isValid) {
            console.log(values);
            props.history.push('/signup')
        }
        handleSubmit();
    }

    return (
        <div className="start-page-container form-font-size flex-x center">
            <div className="home-left-width">
                <div className="start-page-logo">
                    <img src={whiteLogo} alt="" />
                </div>
                <div>
                    <div className="start-page-heading an-54 bold-text light--text lh-60">
                        Sed ut perspic unde omnis iste error sit amet
                    </div>
                    <div className="start-page-info light--text an-20 lh-30">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        eiusmod tempor incididunt ut labore.
                    </div>
                    <div className="text-right ma40">
                        <img src={homeScreenArrow} alt="" />
                    </div>
                </div>
            </div>
            <div className="pt50">
                <div className="home-page-form-container">
                    <div className="an-28 lh-34 bold-text">
                        Hii There... Let's Get Started...
                    </div>
                    <div className="an-14 lh-16 light-grey--text form-label pt50">
                        Loan Amount Requested
                    </div>
                    <div className="flex-x align-center pt10">
                        <div className="flex-1">
                            <CoronaSlider
                                track={false}
                                aria-labelledby="track-false-range-slider"
                                getAriaValueText={valuetext}
                                id='loanAmount'
                                value={Number(values.loanAmount)}
                                onChange={(e: ChangeEvent, value: number) => setFieldValue('loanAmount',value) }
                                marks={marks}
                            />
                        </div>
                        <div className="progress-status-block">2.7L</div>
                    </div>
                    <div className="an-14 lh-16 light-grey--text form-label pt30">
                        What Will The Funds Be Used For ?
                    </div>
                    <div className="form-radio-group">
                        <RadioGroup
                            aria-label="fund"
                            name="fund"
                            row
                            id="fundUse"
                            value={values.fundUse}
                            onChange={(e: ChangeEvent, value: string) => setFieldValue('fundUse', value)}
                        >
                            <FormControlLabel
                                value="personal"
                                control={<Radio color="primary" />}
                                label="Personal"
                            />
                            <FormControlLabel
                                value="organization"
                                control={<Radio color="primary" />}
                                label="Organization"
                            />
                        </RadioGroup>
                    </div>
                    <div className="an-14 lh-16 light-grey--text form-label pt20">
                        Constitution
                    </div>
                    <CoronaFormControl>
                        <CoronaSelect
                            labelId="demo-simple-select-label"
                            id="constitution"
                            name="constitution"                            
                            value={values.constitution}
                            onChange={handleChange}
                        >
                            <CoronaMenuItem value={"individual"}>
                                Individual
                            </CoronaMenuItem>
                            <CoronaMenuItem value={"team"}>
                                With Team
                            </CoronaMenuItem>
                        </CoronaSelect>
                    </CoronaFormControl>
                    <div className="an-14 lh-16 light-grey--text form-label pt30">
                        Purpose
                    </div>
                    <CoronaFormControl>
                        <CoronaSelect
                            id="purpose"
                            name="purpose"
                            value={values.purpose}
                            onChange={handleChange}
                        >
                            <CoronaMenuItem value={'business'}>
                                Business Investment
                            </CoronaMenuItem>
                            <CoronaMenuItem value={'home'}>
                                Purchase Home
                            </CoronaMenuItem>
                        </CoronaSelect>
                    </CoronaFormControl>
                    <div className="an-14 lh-16 light-grey--text form-label pt30">
                        Other (Please Explain)
                    </div>
                    <CoronaFormControl>
                        <CoronaTextField
                            error={errors.others && touched.others}
                            helperText={touched.others && errors.others}
                            id="others"
                            value={values.others}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </CoronaFormControl>
                    <div className="pt30">
                        <CoronaFormControl>
                            <CoronaButton
                                variant="contained"
                                color="primary"
                                className="light--text"
                                onClick={submitValues}
                            >
                                Next >
                            </CoronaButton>
                        </CoronaFormControl>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(enhancer(StartUp));
