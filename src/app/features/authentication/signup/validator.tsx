import {
    withFormik
} from "formik";
import * as Yup from "yup";

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

const formikEnhancer = withFormik<signUpProps, FormValues>({
    validationSchema: Yup.object().shape({
        firstname: Yup.string().required('Please enter first name.'),
        middlename: Yup.string().required('Please enter middle name.'),
        lastname: Yup.string().required('Please enter last name.'),
        dateofbirth: Yup.mixed().required('Please select birthdate.'),
        phone_number: Yup.number().required('Please enter phone number.'),
        email: Yup.string().email('Please enter valid email').required('Please enter email.'),
        password: Yup.string().required('Please enter password.'),
        repassword: Yup.string().required('Please re-enter password.').oneOf([Yup.ref('password'), null], 'Passwords must match'),
    }),
    mapPropsToValues: (signUpProps) => ({
        firstname: '',
        middlename: '',
        lastname: '',
        dateofbirth: Date(),
        phone_number: '',
        email: '',
        password: '',
        repassword: '' 
    }),
    handleSubmit: (values: any) => {},
    displayName: 'SignUpForm',
    enableReinitialize:true,
    isInitialValid: false
});

export default formikEnhancer;