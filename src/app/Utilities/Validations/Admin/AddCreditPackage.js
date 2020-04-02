import React from "react";
import Validator from 'is_js';
import { isEmpty } from 'lodash';
import { Translate } from "components";

function validateAddCreditPackage(data,translation) {
    let errors = {};

    if(Validator.empty(data.currency)) {
        errors.currency = <Translate text="CURRENCY_REQUIRED" />
    }

    if(Validator.empty(data.credits)) {
        errors.credit = <Translate text="CREDIT_REQUIRED" />
    }


    return {
        isValid: isEmpty(errors),
        errors
    }
}

export default validateAddCreditPackage;