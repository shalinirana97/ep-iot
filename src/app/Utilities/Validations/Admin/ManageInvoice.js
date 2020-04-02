import Validator from 'is_js';
import  { isEmpty } from 'lodash';

function validateMangeInvoice(data) {
    let errors = {};

    // if(Validator.empty(data.supplier)) {
    //     errors.supplier = 'Supplier is required !';
    // }

    // if(Validator.empty(data.job_id)) {
    //     errors.job_id = 'Job Id is required !';
    // }

    // if(Validator.empty(data.product)) {
    //     errors.product = 'Product is required !';
    // }

    // if( data.invoice_id && Validator.empty(data.invoice_id)) {
    //     errors.invoice_id = 'Invoice Id is required !';
    // }

    return {
        isValid: isEmpty(errors),
        errors
    }
}

export default validateMangeInvoice;