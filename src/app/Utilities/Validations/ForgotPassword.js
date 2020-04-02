import React from "react";
import Validator from 'is_js';
import { isEmpty } from 'lodash';
import { Translate } from "components";

function validateForgotPassword(data) {
    let errors = {};

    if(Validator.empty(data.email)) {
        errors.email = <Translate text="EMAIL_REQUIRED" />;
    }

    if(!Validator.empty(data.email) && !Validator.email(data.email)) {
        errors.email = <Translate text="INVALID_EMAIL" />;;
    }

    return {
        isValid: isEmpty(errors),
        errors
    }
}

export default validateForgotPassword;