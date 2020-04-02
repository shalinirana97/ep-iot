import Validator from 'is_js';
import  { isEmpty } from 'lodash';

function validateMangeSupplier(data) {
    let errors = {};

    // if(Validator.empty(data.supplier_name)) {
    //     errors.supplier_name = 'Supplier Name is required !';
    // }

    // if(Validator.empty(data.supplier_email)) {
    //     errors.supplier_email = 'Supplier Email is required !';
    // }

    if(!Validator.empty(data.email) && !Validator.email(data.email)) {
        errors.supplier_email = 'Invalid email!';
    }

    // if(Validator.empty(data.product)) {
    //     errors.product = 'Product is required !';
    // }

    return {
        isValid: isEmpty(errors),
        errors
    }
}

export default validateMangeSupplier;