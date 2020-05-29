import React, { useState, ChangeEvent } from 'react';
import {
    Grid,
    Checkbox,
    Button,
    FormControl,
    FormLabel,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup
} from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { makeStyles, Theme } from "@material-ui/core/styles";
import '../../../../../assets/scss/loanDashboard.scss'
import SaveMoney from "../../../../../assets/images/save-money.png";
import { AddressModal } from './AddAddressModal';
import { AddressPaper, AddNew, IdentityPaper, IncomePaper } from './DisplayCards';
import enhancer from './borrowersValidator'
import { InjectedFormikProps } from 'formik';
import { CoronaTextField, CoronaKeyboardDatePicker, CoronaSelect, CoronaMuiPickersUtilsProvider } from 'app/core/components';

interface IBorrowerInfoProps {
    goToPrev: () => void;
    goToNext: () => void;
}
interface FormValues{
    name?: string;
    soText?: string;
    age?: string;
    dateofbirth?: any;
    sex?: string;
    occupation?: string;
    qualification?: string;
    email?: string;
    mobile?: string;
    landline?: string;
    existingCustomer?: string;
    accountNumber?: string;
    ckyc?: string;
    mandatory?: string;
}
const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        flexDirection: "row",
        padding: "30px",
        marginTop: "20px",
        backgroundColor: theme.palette.background.default,
        borderRadius: "3px",
        boxShadow: "0 0 2px 0 rgba(0,0,0,0.12), 0 2px 2px 0 rgba(0,0,0,0.24)"
    },
    gridContainer: {
        marginTop: "20px",
        transform: "scale(1.03)"
    },
    cardContainer: {
        margin: "15px",
        padding: "25px",
        boxShadow: "0 0 2px 0 rgba(0,0,0,0.12), 0 2px 2px 0 rgba(0,0,0,0.24)"
    },
    addContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "15px",
        padding: "40px",
        border: "1px dashed #D2D2D2",
        borderRadius: "3px",
        backgroundColor: "#F9F9F9",
        boxShadow: "0 0 2px 0 rgba(0,0,0,0.12), 0 2px 2px 0 rgba(0,0,0,0.24)"
    },
    back: {
        marginTop: "3px",
        marginLeft: "10px"
    }
}));

const BorrowerInfo: React.FunctionComponent<InjectedFormikProps<IBorrowerInfoProps, FormValues>> = (props) => {
    const classes = useStyles();
    const [modalOpen, setOpenModal] = useState(false);

    const toggleModal = () => setOpenModal(isOpen => !isOpen);

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

    const proceedFurther = () => {
        console.log(errors);
        if (isValid) {
            console.log(values);
            props.goToNext()
        }
        handleSubmit();
    }

    return (
        <CoronaMuiPickersUtilsProvider>
            <Grid
                container
                className="mt30 mb10 cursor-pointer primary--text"
                onClick={props.goToPrev}
            >
                <Grid item>
                    <KeyboardBackspaceIcon />
                </Grid>
                <Grid item classes={{ root: classes.back }}>
                    <span className="an-14 medium-text">BACK</span>
                </Grid>
            </Grid>
            {/* Title bar */}
            <Grid container classes={{ root: classes.root }} className="mt0">
                <div>
                    <img src={SaveMoney} alt="save-money" />
                </div>
                <div className="ml20">
                    <div className="title-text an-18 bold-text mb10">
                        Borrower Information
                    </div>
                    <div className="secondary-grey--text an-14">
						Sed ut perspiciatis unde omnis iste natus error
                    </div>
                </div>
            </Grid>
            {/* Form */}
            <Grid container classes={{ root: classes.root }}>
                <span className="title-text an-18 bold-text">Main Details</span>
                <Grid
                    container
                    classes={{ root: classes.gridContainer }}
                    className="mb40 borrower-info-form"
                >
                    <Grid item xs={6} className="px15 sign-up-form">
                        <CoronaTextField
                            fullWidth
                            margin="normal"
                            label="Name"
							className="ma10"
                            error={errors.name && touched.name}
                            helperText={touched.name && errors.name}
                            id="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Grid>
                    <Grid item xs={6} className="px15">
                        <CoronaTextField
                            fullWidth
                            margin="normal"
                            label="Mobile No."
							className="ma10"
                            error={errors.mobile && touched.mobile}
                            helperText={touched.mobile && errors.mobile}
                            id="mobile"
                            value={values.mobile}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Grid>
                    <Grid item xs={6} className="px15">
                        <CoronaTextField
                            fullWidth
                            margin="normal"
                            label="S/O W/O D/O"
							className="ma10"
                            error={errors.soText && touched.soText}
                            helperText={touched.soText && errors.soText}
                            id="soText"
                            value={values.soText}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Grid>
                    <Grid item xs={6} className="px15">
                        <CoronaTextField
                            fullWidth
                            margin="normal"
                            label="Landline No."
							className="ma10"
                            error={errors.landline && touched.landline}
                            helperText={touched.landline && errors.landline}
                            id="landline"
                            value={values.landline}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Grid>
                    <Grid item xs={6} className="px15">
                        <CoronaTextField
                            fullWidth
                            margin="normal"
                            label="Age"
							className="ma10"
                            error={errors.age && touched.age}
                            helperText={touched.age && errors.age}
                            id="age"
                            value={values.age}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Grid>
                    <Grid item xs={6} className="px15">
                        <CoronaTextField
                            fullWidth
                            margin="normal"
                            label="Email Id"
							className="ma10"
                            error={errors.email && touched.email}
                            helperText={touched.email && errors.email}
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Grid>
                    <Grid item xs={6} className="px15">
                        <CoronaKeyboardDatePicker
                            className='fill-width'
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
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        className="px15 pt15 secondary-grey--text"
                    >
                        <FormControl component="fieldset">
                            <FormLabel component="legend">
                                Are you existing Customer ?
                            </FormLabel>
                            <RadioGroup
                                row
                                aria-label="gender"
                                name="customized-radios"
                                id="existingCustomer"
                                value={values.existingCustomer}
                                onBlur={handleBlur}
                                onChange={(e: ChangeEvent, value: string) => setFieldValue('existingCustomer', value)}
                            >
                                <FormControlLabel
									className="radio-label"
                                    value="yes"
                                    control={<Radio color="primary" />}
                                    label="Yes"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
									className="radio-label"
                                    value="no"
                                    control={<Radio color="primary" />}
                                    label="No"
                                    labelPlacement="end"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} className="px15 pt15">
                        <FormControl fullWidth>
                            <InputLabel>Sex</InputLabel>
                            <CoronaSelect
                                id="sex"
                                value={values.sex}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                                <MenuItem value={'male'}>Male</MenuItem>
                                <MenuItem value={'female'}>Female</MenuItem>
                            </CoronaSelect>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} className="px15">
                        <CoronaTextField
                            fullWidth
                            margin="normal"
                            label="Account No"
                            prefix="#"
							className="ma10"
                            error={errors.accountNumber && touched.accountNumber}
                            helperText={touched.accountNumber && errors.accountNumber}
                            id="accountNumber"
                            value={values.accountNumber}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Grid>
                    <Grid item xs={6} className="px15">
                        <CoronaTextField
                            fullWidth
                            margin="normal"
                            label="Occupation"
							className="ma10"
                            error={errors.occupation && touched.occupation}
                            helperText={touched.occupation && errors.occupation}
                            id="occupation"
                            value={values.occupation}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Grid>
                    <Grid item xs={6} className="px15">
                        <CoronaTextField
                            fullWidth
                            margin="normal"
                            label="CKYC No.(if any)"
							className="ma10"
                            error={errors.ckyc && touched.ckyc}
                            helperText={touched.ckyc && errors.ckyc}
                            id="ckyc"
                            value={values.ckyc}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Grid>
                    <Grid item xs={6} className="px15">
                        <CoronaTextField
                            fullWidth
                            margin="normal"
                            label="Qualification"
							className="ma10"
                            error={errors.qualification && touched.qualification}
                            helperText={touched.qualification && errors.qualification}
                            id="qualification"
                            value={values.qualification}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        className="px15 pt15 secondary-grey--text"
                    >
                        <FormControl component="fieldset">
                            <FormLabel component="legend">
                                CKYC Mandatory Annexure attached ?
                            </FormLabel>
                            <RadioGroup
                                row
                                aria-label="gender"
                                name="customized-radios"
                                id="mandatory"
                                value={values.mandatory}
                                onBlur={handleBlur}
                                onChange={(e: ChangeEvent, value: string) => setFieldValue('mandatory', value)}
                            >
                                <FormControlLabel
									className="radio-label"
                                    value="yes"
                                    control={<Radio color="primary" />}
                                    label="Yes"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
									className="radio-label"
                                    value="no"
                                    control={<Radio color="primary" />}
                                    label="No"
                                    labelPlacement="end"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
            {/* Borrower address */}
            <Grid container classes={{ root: classes.root }}>
                <span className="title-text an-18 bold-text">
                    Borrower Address
                </span>
                <Grid container classes={{ root: classes.gridContainer }}>
                    <Grid item xs={12} md={6}>
                        <AddressPaper cardContainer={classes.cardContainer} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <AddressPaper cardContainer={classes.cardContainer} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <AddressPaper cardContainer={classes.cardContainer} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <AddNew
                            onClick={toggleModal}
                            addContainer={classes.addContainer}
                            title="Address"
                        />
                    </Grid>
                </Grid>
                <div className="secondary-grey--text mt25">
                    <Checkbox
                        color="primary"
                        inputProps={{
                            "aria-label": "secondary checkbox"
                        }}
                    />{" "}
                    Is your current address same as the permanent address ?
                </div>
            </Grid>
            {/* Proofs */}
            <Grid container classes={{ root: classes.root }}>
                <span className="title-text an-18 bold-text">
                    Identity Proof
                </span>
                <Grid container classes={{ root: classes.gridContainer }}>
                    <Grid item xs={12} md={6}>
                        <IdentityPaper cardContainer={classes.cardContainer} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <AddNew
                            addContainer={classes.addContainer}
                            title="Proof"
                        />
                    </Grid>
                </Grid>
            </Grid>
            {/* Incomes */}
            <Grid container classes={{ root: classes.root }}>
                <span className="title-text an-18 bold-text">
                    Income Details
                </span>
                <Grid container classes={{ root: classes.gridContainer }}>
                    <Grid item xs={12} md={6}>
                        <IncomePaper cardContainer={classes.cardContainer} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <AddNew
                            addContainer={classes.addContainer}
                            title="Income"
                        />
                    </Grid>
                </Grid>
            </Grid>
            {/* Save Button */}
            <Grid container className="mt50">
                <Button
                    color="primary"
                    variant="contained"
                    className="save-btn light--text"
                    onClick={proceedFurther}
                >
                    SAVE
                </Button>
            </Grid>
            <AddressModal open={modalOpen} onClose={toggleModal} />
        </CoronaMuiPickersUtilsProvider>
    );
};

export default enhancer(BorrowerInfo);
