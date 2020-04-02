import React from "react";
import Validator from 'is_js';
import { isEmpty } from 'lodash';
import { Translate } from "components";

function validateResetPassword(data) {
    let errors = {};

    if(Validator.empty(data.password)) {
        errors.password = <Translate text="PASSWORD_REQUIRED" />;
    }

    if(!Validator.empty(data.password) && data.password.length < 6) {
        errors.password = <Translate text="PASSWORD_NOT_MATCH" />;
    }


    if(Validator.empty(data.password_confirmation)) {
        errors.password_confirmation = <Translate text="CONFIRMATION_PASSWORD" />;
    }

    if (!Validator.empty(data.password) && !Validator.empty(data.password_confirmation) && data.password!== data.password_confirmation) {
        errors.password_confirmation = <Translate text="PASSWORD_NOT_MATCH" />;
    }

    return {
        isValid: isEmpty(errors),
        errors
    }
}

export default validateResetPassword;