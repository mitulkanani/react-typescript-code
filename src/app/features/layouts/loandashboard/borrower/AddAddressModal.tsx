import React, { useState, FunctionComponent } from 'react';
import { Modal, Grid, Button, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../../../../../assets/scss/loanDashboard.scss';
import enhancer from './addressValidator'
import { InjectedFormikProps } from 'formik';
import { CoronaTextField } from 'app/core/components';

function getModalStyle() {
	const top = 8;

	return {
		top: `${top}%`,
		margin: 'auto',
		width: '500px'
	};
}

const useStyles = makeStyles((theme: Theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	paper: {
		position: 'absolute',
		width: '100%',
		backgroundColor: theme.palette.background.default,
		borderRadius: '3px',
		padding: '35px'
	},
	saveButton: {
		width: '160px',
		color: theme.palette.background.default
	},
	cancelButton: {
		marginLeft: '25px',
		width: '160px',
		color: '#42BAF8 !important'
	}
}));

interface IAddAddressModalProps {
    open: boolean;
    onClose: () => void;
}
interface FormValues{
    address1: string;
    address2: string;
    city: string;
    state: string;
    pincode: string;
}

const WrapAddressModal: FunctionComponent<InjectedFormikProps<IAddAddressModalProps, FormValues>> = (props) => {
    const [ modalStyle ] = useState(getModalStyle);

	const classes = useStyles();

	const {
        handleChange,
        handleBlur,
        errors,
		touched,
		isValid,
        values,
        handleSubmit
	} = props;
	
	const submitValues = () => {
        if (isValid) {
            console.log(values);
            props.onClose()
        }
        handleSubmit();
    }


	return (
		<Modal
			open={props.open}
			style={modalStyle}
			// classes={classes.modal}
			onClose={props.onClose}>
			<div className={classes.paper}>
				<div className="title-text an-18 bold-text">Address</div>
				<Grid container className="secondary-grey--text borrower-info-form">
					<Grid item xs={12}>
						<CoronaTextField
							fullWidth
							margin="normal"
							label="Address Line 1"
							className="ma10"
							error={errors.address1 && touched.address1}
                            helperText={touched.address1 && errors.address1}
                            id="address1"
                            value={values.address1}
                            onChange={handleChange}
                            onBlur={handleBlur}
						/>
					</Grid>
					<Grid item xs={12}>
						<CoronaTextField
							fullWidth
							margin="normal"
							label="Address Line 2"
							className="ma10"
							error={errors.address2 && touched.address2}
                            helperText={touched.address2 && errors.address2}
                            id="address2"
                            value={values.address2}
                            onChange={handleChange}
                            onBlur={handleBlur}

						/>
					</Grid>
					<Grid item xs={12}>
						<CoronaTextField
							fullWidth
							margin="normal"
							label="City"
							className="ma10"
							error={errors.city && touched.city}
                            helperText={touched.city && errors.city}
                            id="city"
                            value={values.city}
                            onChange={handleChange}
                            onBlur={handleBlur}

						/>
					</Grid>
					<Grid item xs={12}>
						<CoronaTextField
							fullWidth
							margin="normal"
							label="State"
							className="ma10"
							error={errors.state && touched.state}
                            helperText={touched.state && errors.state}
                            id="state"
                            value={values.state}
                            onChange={handleChange}
                            onBlur={handleBlur}

						/>
					</Grid>
					<Grid item xs={12}>
						<CoronaTextField
							fullWidth
							margin="normal"
							label="Pincode"
							className="ma10"
							error={errors.pincode && touched.pincode}
                            helperText={touched.pincode && errors.pincode}
                            id="pincode"
                            value={values.pincode}
                            onChange={handleChange}
                            onBlur={handleBlur}
						/>
					</Grid>
					<Grid item xs={12}>
						<Grid container className="mt30">
							<Button
								color="primary"
								classes={{
									root: classes.saveButton,
									// active: classes.saveButton
								}}
								onClick={submitValues}
								variant="contained">
								SAVE
							</Button>

							<Button
								classes={{
									// active: classes.cancelButton,
									root: classes.cancelButton,
								}}
								className="cancel-btn an-14 medium-text"
								onClick={props.onClose}
								variant="contained">
								Cancel
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</div>
		</Modal>
	);
};
export const AddressModal = enhancer(WrapAddressModal);
