import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import {
    CoronaButton,
    CoronaFormControl,
    CoronaTextField,
    CoronaKeyboardDatePicker,
    CoronaMuiPickersUtilsProvider
} from "app/core/components";
import { InputAdornment } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { signupImage, appLogo } from "helper/constant";
import enhancer from './validator'
import { InjectedFormikProps } from "formik";

interface signUpProps {
    history: any;
}
interface FormValues{
    firstname: string;
    middlename: string;
    lastname: string;
    dateofbirth: any;
    phone_number: string;
    email: string;
    password: string;
    repassword: string;
}
const SignUp: React.FunctionComponent<InjectedFormikProps<signUpProps, FormValues>> = props => {
    const [passwordIsMasked, setPasswordIsMasked] = useState(true);
    const [isAgree, setIsAgree] = useState(true);

    const togglePasswordMask = () => {
        setPasswordIsMasked(!passwordIsMasked);
    };
    const {
        handleChange,
        handleBlur,
        errors,
        touched,
        values,
        isValid,
        setFieldValue,
        handleSubmit
    } = props;

    const submitValues = () => {
        if (isValid) {
            console.log(values);
            props.history.push('/application')
        }
        handleSubmit();
    }

    return (
        <div>
            <Grid container>
                <Grid item lg={5} md={6}>
                    <div className="sign-up-form-container form-font-size form-label-light-grey">
                        <div className="sign-up-page-logo">
                            <img src={appLogo} alt="" />
                        </div>
                        <div className="an-20 medium-text lh-25 pt50">
                            Create an account and become our member
                        </div>
                        <div className="sign-up-form">
                            <div className="pt30">
                                <CoronaFormControl>
                                    <CoronaTextField
                                        error={errors.firstname && touched.firstname}
                                        helperText={touched.firstname && errors.firstname}
                                        label="First Name"
                                        id="firstname"
                                        value={values.firstname}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </CoronaFormControl>
                            </div>
                            <div className="pt15">
                                <CoronaFormControl>
                                    <CoronaTextField
                                        error={errors.middlename && touched.middlename}
                                        helperText={touched.middlename && errors.middlename}
                                        label="Middle Name"
                                        id="middlename"
                                        value={values.middlename}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </CoronaFormControl>
                            </div>
                            <div className="pt15">
                                <CoronaFormControl>
                                    <CoronaTextField
                                        error={errors.lastname && touched.lastname}
                                        helperText={touched.lastname && errors.lastname}
                                        label="Last Name"
                                        id="lastname"
                                        value={values.lastname}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </CoronaFormControl>
                            </div>
                            <div>
                                <CoronaFormControl>
                                    <CoronaMuiPickersUtilsProvider>
                                        <CoronaKeyboardDatePicker
                                            error={errors.dateofbirth && touched.dateofbirth}
                                            helperText={touched.dateofbirth && errors.dateofbirth}
                                            id="dateofbirth"
                                            label="Date of Birth *"
                                            value={values.dateofbirth}
                                            onBlur={handleBlur}
                                            onChange={(date: any) =>
                                                setFieldValue('dateofbirth', date)
                                            }
                                        />
                                    </CoronaMuiPickersUtilsProvider>
                                </CoronaFormControl>
                            </div>
                            <div className="pt10">
                                <CoronaFormControl>
                                    <CoronaTextField
                                        error={errors.email && touched.email}
                                        helperText={touched.email && errors.email}
                                        label="Email"
                                        id="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </CoronaFormControl>
                            </div>
                            <div className="pt15">
                                <CoronaFormControl>
                                    <CoronaTextField
                                        error={errors.phone_number && touched.phone_number}
                                        helperText={touched.phone_number && errors.phone_number}
                                        label="Mobile"
                                        id="phone_number"
                                        value={values.phone_number}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </CoronaFormControl>
                            </div>
                            <div className="pt15">
                                <CoronaFormControl>
                                    <CoronaTextField
                                        error={errors.password && touched.password}
                                        helperText={touched.password && errors.password}
                                        id="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"
                                    />
                                </CoronaFormControl>
                            </div>
                            <div className="pt15">
                                <CoronaFormControl>
                                    <CoronaTextField
                                        error={errors.repassword && touched.repassword}
                                        helperText={touched.repassword && errors.repassword}
                                        id="repassword"
                                        value={values.repassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        label="Reconfirm Password"
                                        type={
                                            passwordIsMasked
                                                ? "password"
                                                : "text"
                                        }
                                        autoComplete="current-password"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    {passwordIsMasked ? (
                                                        <i
                                                            onClick={
                                                                togglePasswordMask
                                                            }
                                                            className="fas fa-eye-slash password-eye"
                                                        ></i>
                                                    ) : (
                                                        <i
                                                            onClick={
                                                                togglePasswordMask
                                                            }
                                                            className="far fa-eye password-eye"
                                                        ></i>
                                                    )}
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </CoronaFormControl>
                            </div>
                            <div className="pt10 accept-term-text">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={isAgree}
                                            onChange={() =>
                                                setIsAgree(!isAgree)
                                            }
                                            value="isAgree"
                                            color="primary"
                                        />
                                    }
                                    label={
                                        <div className="an-14">
                                            I agree to the
                                            <span className="primary--text hover-border">
                                                {" "}
                                                Terms of Use{" "}
                                            </span>
                                            And
                                            <span className="primary--text hover-border">
                                                {" "}
                                                Privacy Policy{" "}
                                            </span>
                                        </div>
                                    }
                                />
                            </div>
                            <div className="pt20">
                                <CoronaButton
                                    variant="contained"
                                    color="primary"
                                    className="light--text px40"
                                    onClick={submitValues}
                                >
                                    SIGN UP
                                </CoronaButton>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={7} md={6}>
                    <div className="signup-image">
                        <img src={signupImage} alt="signup" />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default enhancer(SignUp);
