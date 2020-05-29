import React, { useState, Fragment } from 'react';
import {
    Stepper,
    Step,
    StepLabel,
    Grid,
    Paper,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import LoanImg from "../../../../assets/images/loan.png";
import BriefcaseImg from "../../../../assets/images/briefcase.png";
import BorrowerInfo from './borrower/BorrowerInfo';



interface ILoanDashProps {
}
interface ILoanInfoProps{
    goToNext: () => void;
    goToPrev: () => void;
}

const useStyles = makeStyles( (theme: Theme) => ({
    root: {
        marginTop: "25px",
        borderRadius: "3px",
        boxShadow: "0 0 2px 0 rgba(0,0,0,0.12), 0 2px 2px 0 rgba(0,0,0,0.24)"
    },
    cards: {
        borderRadius: "3px",
        // backgroundColor: theme.palette.background,
        boxShadow: "0 0 2px 0 rgba(0,0,0,0.12), 0 2px 2px 0 rgba(0,0,0,0.24)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        margin: "10px",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "#EFFAFF"
        }
    },
    gridContainer: {
        transform: "scale(1.03)"
    },
    selectOption: {
        width: "180px"
    },
    blueColor: {
        color: "#42BAF8 !important"
    },
    primaryButton: {
        backgroundColor: "#42BAF8 !important",
        color: "#FFFFFF !important"
    },
    fillColor: {
        fill: "#fff"
    }
}) )

const LoanDash: React.FunctionComponent<ILoanDashProps> = (props) => {
    const [steps] = useState([
        {
            label: "Loan & Business Information"
        },
        {
            label: "Borrowers Information"
        },
        {
            label: "Guarantors Information"
        },
        {
            label: "Documents"
        }
    ]);
    const [activeStep, setActiveStep] = useState(0);

    const classes = useStyles();

    const goToPrev = () => {setActiveStep(step => step - 1)};
    const goToNext = () => {setActiveStep(step => step + 1)};

    const getComponent = () => {
        switch (activeStep) {
            case 0:
                return <LoanInfo goToPrev={goToPrev} goToNext={goToNext} />;
            case 1:
                return <BorrowerInfo goToPrev={goToPrev} goToNext={goToNext} />;
            default:
                return <div />;
        }
    };
    return (
        <Fragment>
            <Grid container justify="space-between" className="align-center">
                <span className="an-26 medium-text">Loan Dashboard</span>
                <FormControl classes={{ root: classes.selectOption }}>
                    <InputLabel className="an-14 light-grey--text">
                        Select Branch
                    </InputLabel>
                    <Select>
                        <MenuItem value={0}>Branch 1</MenuItem>
                        <MenuItem value={1}>Branch 2</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Stepper activeStep={activeStep} classes={{ root: classes.root }}>
                {steps.map((ele, key) => (
                    <Step key={key}>
                        <StepLabel
                            StepIconProps={{
                                classes: {
                                    text: classes.fillColor,
                                    active: classes.blueColor,
                                    completed: classes.blueColor
                                }
                            }}
                            classes={{
                                active: classes.blueColor,
                                completed: classes.blueColor
                            }}
                        >
                            {ele.label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
            {getComponent()}
        </Fragment>
    );
};



const LoanInfo: React.FunctionComponent<ILoanInfoProps> = props => {
    const classes = useStyles();
    return (
        <Fragment>
            <Grid
                container
                className="mt40"
                classes={{ root: classes.gridContainer }}
            >
                <Grid item xs={12} sm={6} md={6}>
                    <Paper classes={{ root: classes.cards }}>
                        <img src={LoanImg} alt="loanimg" />
                        <div className="title-text an-18 bold-text mt15 lh-23">
                            Loan Information
                        </div>
                        <div className="subtitle-text an-12 lh-22">
                            CLICK HERE TO ADD/EDIT DETAILS
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Paper classes={{ root: classes.cards }}>
                        <img src={BriefcaseImg} alt="briefcash" />
                        <div className="title-text an-18 bold-text mt15 lh-23">
                            Business Information
                        </div>
                        <div className="subtitle-text an-12 lh-22">
                            CLICK HERE TO ADD/EDIT DETAILS
                        </div>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container justify="flex-end" className="mt50">
                <Button
                    color="default"
                    className="next-btn"
                    variant="contained"
                    onClick={() => props.goToNext()}
                >
                    NEXT
                </Button>
            </Grid>
        </Fragment>
    );
};


export default LoanDash;
