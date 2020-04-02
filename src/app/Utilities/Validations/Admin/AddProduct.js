import Validator from 'is_js';
import  { isEmpty } from 'lodash';

function validateAddProduct(data) {
    let errors = {};

    if(Validator.empty(data.productName)) {
        errors.productName = 'Product Name is required!';
    }

    return {
        isValid: isEmpty(errors),
        errors
    }
}

export default validateAddProduct;