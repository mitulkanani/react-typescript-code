import {
    withFormik
} from "formik";
import * as Yup from "yup";

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

const formikEnhancer = withFormik<IBorrowerInfoProps, FormValues>({
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Please enter name.'),
        soText: Yup.string().required('Please enter this field.'),
        age: Yup.number().required('Please enter age.'),
        dateofbirth: Yup.mixed().required('Please select Date of birth.'),
        sex: Yup.string().required('Please select sex.'),
        occupation: Yup.string().required('Please enter occupation.'),
        qualification: Yup.string().required('Please enter qualification.'),
        email: Yup.string().email().required('Please enter mail.'),
        mobile: Yup.number().required('Please enter mobile No.'),
        landline: Yup.number().required('Please enter landline No.'),
        existingCustomer: Yup.string().required('Please select one.'),
        accountNumber: Yup.string().required('Please enter account No .'),
        ckyc: Yup.string().required('This field is required.'),
        mandatory: Yup.string().required('This field is required.'),
    }),
    mapPropsToValues: (IBorrowerInfoProps) => ({
        name: '',
        soText: '',
        age: '',
        dateofbirth: Date(),
        sex: 'male',
        occupation: '',
        qualification: '',
        mobile: '',
        landline: '',
        email: '',
        existingCustomer: 'yes',
        accountNumber: '',
        ckyc: '',
        mandatory: 'yes'
    }),
    handleSubmit: (values: any) => {},
    displayName: 'BorrowerForm',
    enableReinitialize:true,
    isInitialValid: false
});

export default formikEnhancer;