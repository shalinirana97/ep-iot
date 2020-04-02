import React from "react";
import Validator from 'is_js';
import { isEmpty } from 'lodash';
import { Translate } from "components";
import { scrollIntoView } from 'utils';

function validateLogin(data) {
    let errors = {};
    let flag = false;

    if (Validator.empty(data.email)) {
        errors.email = <Translate text="EMAIL_REQUIRED" />;
        if (!flag) {
            scrollIntoView("email");
            flag = true;
        }
    }

    if (!Validator.empty(data.email) && !Validator.email(data.email)) {
        errors.email = <Translate text="INVALID_EMAIL" />;
        if (!flag) {
            scrollIntoView("email");
            flag = true;
        }
    }

    if (Validator.empty(data.password)) {
        errors.password = <Translate text="PASSWORD_REQUIRED" />;
        if (!flag) {
            scrollIntoView("password");
            flag = true;
        }
    }

    if (!Validator.empty(data.password) && data.password.length < 6) {
        errors.password = <Translate text="PASSWORD_LENGTH" />;
        if (!flag) {
            scrollIntoView("password");
            flag = true;
        }
    }

    return {
        isValid: isEmpty(errors),
        errors
    }
}

export default validateLogin;