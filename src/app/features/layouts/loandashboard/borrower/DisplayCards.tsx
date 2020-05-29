import React from 'react';
import { Paper, Grid } from '@material-ui/core'
import { addRound } from 'helper/constant';

interface IPaperProps {
    cardContainer: string;
}

interface IAddNewProps {
    addContainer: string;
    onClick?: () => void;
    title?: string;
}

export const AddressPaper: React.FunctionComponent<IPaperProps> = (props) => {
    return (
		<Paper classes={{ root: props.cardContainer }}>
			<Grid container justify="space-between">
				<div>
					<span className="an-16 bold-text">Address 1</span>&emsp;
					<span className="secondary-grey--text">(Permanent)</span>
				</div>
				<div className="secondary-grey--text">
					<span className="an-12">EDIT</span>&emsp;
					<span className="an-12">DELETE</span>
				</div>
			</Grid>
			<Grid container className="secondary-grey--text mt20">
				Flat No. 100,<br />
				Triveni Apartments, Pitam Pura<br />
				New Delhi - 110034
			</Grid>
		</Paper>
	);
};

export const IdentityPaper: React.FunctionComponent<IPaperProps> = (props) => {
    return (
		<Paper classes={{ root: props.cardContainer }}>
			<Grid container justify="space-between">
				<div>
					<span className="title-text an-16 bold-text">
						PAN
					</span>&emsp;
				</div>
				<div className="secondary-grey--text">
					<span className="an-12">EDIT</span>&emsp;
					<span className="an-12">DELETE</span>
				</div>
			</Grid>
			<Grid container className="mt20">
				<Grid item xs={8}>
					<span className="secondary-grey--text">PAN Number :</span>
					<span className="an-14 bold-text">123456</span>
				</Grid>
				<Grid item xs={8}>
					<span className="secondary-grey--text">Date :</span>
					<span className="an-14 bold-text">11/12/2019</span>
				</Grid>
				<Grid item xs={8}>
					<span className="secondary-grey--text">
						Issuing Authority :
					</span>
					<span className="an-14 bold-text">Income Tax</span>
				</Grid>
			</Grid>
		</Paper>
	);
};

export const IncomePaper: React.FunctionComponent<IPaperProps> = (props) => {
    return (
		<Paper classes={{ root: props.cardContainer }}>
			<Grid container justify="space-between">
				<div>
					<span className="title-text an-16 bold-text">
						Income-1
					</span>&emsp;
				</div>
				<div className="secondary-grey--text">
					<span className="an-12">EDIT</span>&emsp;
					<span className="an-12">DELETE</span>
				</div>
			</Grid>
			<Grid container className="mt20">
				<Grid item xs={8}>
					<span className="secondary-grey--text">Income Type :</span>
					<span className="an-14 bold-text">Salary</span>
				</Grid>
				<Grid item xs={8}>
					<span className="secondary-grey--text">Amount :</span>
					<span className="an-14 bold-text">5,000,000</span>
				</Grid>
				<Grid item xs={8}>
					<span className="secondary-grey--text">Frequency :</span>
					<span className="an-14 bold-text">Yearly</span>
				</Grid>
			</Grid>
		</Paper>
	);
};

export const AddNew: React.FunctionComponent<IAddNewProps> = (props) => {
	return (
		<Paper
			classes={{ root: props.addContainer }}
			onClick={props.onClick}
			className="secondary-grey--text no-box-shadow">
			<img src={addRound} alt="add" className="mb10"/>
			Add Another {props.title}
		</Paper>
	);
};
