import {
    withFormik
} from "formik";
import * as Yup from "yup";
import { RouteComponentProps } from "react-router-dom";

interface FormValues{
    fundUse: string;
    constitution: string;
    purpose: string;
    loanAmount: string;
    others: any;
}

const formikEnhancer = withFormik<RouteComponentProps, FormValues>({
    validationSchema: Yup.object().shape({
        fundUse: Yup.string().required('Please select use.'),
        constitution: Yup.string().required('Please select constitution.'),
        purpose: Yup.string().required('Please select purpose.'),
        loanAmount: Yup.number().required('Please select amount.'),
        others: Yup.string().required('Please describe.'),
    }),
    mapPropsToValues: (startUpProps) => ({
        fundUse: 'personal',
        constitution: 'individual',
        purpose: 'business',
        loanAmount: '30',
        others: '',
    }),
    handleSubmit: (values: any) => {},
    displayName: 'StartUpForm',
    enableReinitialize:true,
    isInitialValid: false
});

export default formikEnhancer;