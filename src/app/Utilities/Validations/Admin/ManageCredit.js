import Validator from 'is_js';
import  { isEmpty } from 'lodash';

function validateManageCredit(data) {
    let errors = {};

    if(Validator.empty(data.currency_type)) {
        errors.currency_type = 'Currency Type is required!';
    }

    return {
        isValid: isEmpty(errors),
        errors
    }
}

export default validateManageCredit;