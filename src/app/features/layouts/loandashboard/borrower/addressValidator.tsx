import {
    withFormik
} from "formik";
import * as Yup from "yup";

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

const formikEnhancer = withFormik<IAddAddressModalProps, FormValues>({
    validationSchema: Yup.object().shape({
        address1: Yup.string().required('Please enter address.'),
        address2: Yup.string().required('Please enter address.'),
        city: Yup.string().required('Please enter city.'),
        state: Yup.string().required('Please select state.'),
        pincode: Yup.number().required('Please enter pincode.'),
    }),
    mapPropsToValues: (IAddAddressModalProps) => ({
        address1: '',
        address2: '',
        city: '',
        state: '',
        pincode: '',
    }),
    handleSubmit: (values: any) => {},
    displayName: 'AddressForm',
    enableReinitialize:true,
    isInitialValid: false
});

export default formikEnhancer;