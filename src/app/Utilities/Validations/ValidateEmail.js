import React from "react";
import Validator from "is_js";
import { isEmpty } from "lodash";
import { scrollIntoView } from "utils";


function validateEmail(data) {
    let errors = {};
    let flag = false;

    if (Validator.empty(data.email)) {
        errors.email = "Email is required!";
        if (!flag) {
            scrollIntoView("email");
            flag = true;
        }
    }

    if (!Validator.empty(data.email) && !Validator.email(data.email)) {
        errors.email = "Invalid email!";
        if (!flag) {
            scrollIntoView("email");
            flag = true;
        }
    }

    return {
        isValid: isEmpty(errors),
        errors
    };
}

export default validateEmail;