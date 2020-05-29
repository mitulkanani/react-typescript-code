import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import NoteImg from '../../../../assets/images/note.png'
import RuppeeImg from '../../../../assets/images/rupee-indian.png';

import { makeStyles, Theme } from '@material-ui/core/styles';

interface ITableProps {
}

interface rowType{
    cid: number;
    machine: string;
    date: string;
    active: boolean;
    amount: string;
}

function createData(cid: number,
    machine: string,
    date: string,
    active: boolean,
    amount: string): rowType {
	return { cid, machine, date, active, amount };
}

const activeRows: rowType[] = [
	createData(100004, 'Working Capital', '12 Aug 2018', true, '10,000,000'),
	createData(100001, 'Machinery', '12 Aug 2018', false, '10,000,000'),
	createData(100004, 'Working Capital', '12 Aug 2018', true, '10,000,000'),
	createData(100008, 'Machinery', '12 Aug 2018', false, '10,000,000'),
	createData(100007, 'Machinery', '12 Aug 2018', false, '10,000,000')
];

const pastRows: rowType[] = [
	createData(1233347, 'MSME Loan', '12 Aug 2018', true, '50,000,000'),
	createData(1233347, 'MSME Loan', '12 Aug 2018', true, '50,000,000'),
	createData(1233347, 'MSME Loan', '12 Aug 2018', true, '50,000,000'),
	createData(1233347, 'MSME Loan', '12 Aug 2018', true, '50,000,000'),
	createData(1233347, 'MSME Loan', '12 Aug 2018', true, '50,000,000')
];

const useStyles = makeStyles( (theme: Theme) =>  ({
	root: {
		width: '100%',
		overflowX: 'auto'
	},
	table: {
		minWidth: 650
	},
	headStyle: {
		paddingBottom: '0px',
		borderBottom: '0px !important'
	},
	statusText: {
		display: 'flex',
		alignItems: 'center'
	}
}));

export const CoronaActiveTable: React.FunctionComponent<ITableProps> = (props) => {
    const classes = useStyles();
	return (
		<Table className={classes.table} aria-label="simple table">
			<TableHead>
				<TableRow>
					<TableCell
						classes={{ root: classes.headStyle }}
						className="secondary-grey--text"
						align="center">
						Refe
					</TableCell>
					<TableCell
						classes={{ root: classes.headStyle }}
						className="secondary-grey--text"
						align="left">
						Loan Type
					</TableCell>
					<TableCell
						classes={{ root: classes.headStyle }}
						className="secondary-grey--text"
						align="left">
						Applied On
					</TableCell>
					<TableCell
						classes={{ root: classes.headStyle }}
						className="secondary-grey--text"
						align="left">
						Status
					</TableCell>
					<TableCell
						classes={{ root: classes.headStyle }}
						className="secondary-grey--text"
						align="left">
						Amount
					</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{activeRows.map((row, i) => (
					<TableRow key={i}>
						<TableCell component="th" scope="row">
							<div className={classes.statusText}>
								<img src={NoteImg} className="mr20" alt="not"/>
								{row.cid}
							</div>
						</TableCell>
						<TableCell align="left">{row.machine}</TableCell>
						<TableCell align="left">{row.date}</TableCell>
						<TableCell align="left">
							{row.active ? (
								<div
									className={`${classes.statusText} success--text`}>
									<CheckCircleOutlineIcon className="mr10" />
									<div>Closed</div>
								</div>
							) : (
								<div
									className={`${classes.statusText} warning--text`}>
									<CancelOutlinedIcon className="mr10" />
									<div>Declined</div>
								</div>
							)}
						</TableCell>
						<TableCell align="left">
							<div className={classes.statusText}>
								<img src={RuppeeImg} className="mr20" alt="rupee"/>
								{row.amount}
							</div>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};

export const CoronaPastTable: React.FunctionComponent<ITableProps> = (props) => {
	const classes = useStyles();
	return (
		<Table className={classes.table} aria-label="simple table">
			<TableHead>
				<TableRow>
					<TableCell
						classes={{ root: classes.headStyle }}
						className="secondary-grey--text"
						align="center">
						Refe
					</TableCell>
					<TableCell
						classes={{ root: classes.headStyle }}
						className="secondary-grey--text"
						align="left">
						Loan Type
					</TableCell>
					<TableCell
						classes={{ root: classes.headStyle }}
						className="secondary-grey--text"
						align="left">
						Applied On
					</TableCell>
					<TableCell
						classes={{ root: classes.headStyle }}
						className="secondary-grey--text"
						align="left">
						Status
					</TableCell>
					<TableCell
						classes={{ root: classes.headStyle }}
						className="secondary-grey--text"
						align="left">
						Amount
					</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{pastRows.map((row, i) => (
					<TableRow key={i}>
						<TableCell component="th" scope="row">
							<div className={classes.statusText}>
								<img src={NoteImg} className="mr20" alt="note"/>
								{row.cid}
							</div>
						</TableCell>
						<TableCell align="left">{row.machine}</TableCell>
						<TableCell align="left">{row.date}</TableCell>
						<TableCell align="left">
							<div
								className={`${classes.statusText} yellow--text`}>
								<InfoOutlinedIcon className="mr10" />
								<div>Submitted</div>
							</div>
						</TableCell>
						<TableCell align="left">
							<div className={classes.statusText}>
								<img src={RuppeeImg} className="mr20" alt="rupee"/>
								{row.amount}
							</div>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};