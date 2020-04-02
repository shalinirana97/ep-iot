import React from "react"
import Validator from 'is_js';
import { isEmpty } from 'lodash';
import { Translate } from "components";
import { scrollIntoView } from 'utils';

function validateEditTeamUser(data,newData) {
    let errors = {};
    let flag = false;
    let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    if (Validator.empty(data.first_name)) {
        errors.first_name = <Translate text="FIRST_NAME_REQUIRED" />;
        if (!flag) {
            scrollIntoView("first_name");
            flag = true;
        }
    }
    else if (format.test(data.first_name) || /\d/.test(data.first_name)) {
        errors.first_name = <Translate text="FIRST_NAME_SPECIAL"
        />;
        if (!flag) {
            scrollIntoView("first_name");
            flag = true;
          }
    }

    if (Validator.empty(data.last_name)) {
        errors.last_name = <Translate text="LAST_NAME_REQUIRED" />;
        if (!flag) {
            scrollIntoView("last_name");
            flag = true;
        }
    }
    else if (format.test(data.last_name) || /\d/.test(data.last_name)) {
        errors.last_name = <Translate text="LAST_NAME_SPECIAL"
        />;
        if (!flag) {
            scrollIntoView("last_name");
            flag = true;
          }
    }

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

    if (Validator.empty(data.status)) {
        errors.status = <Translate text="STATUS_REQUIRED" />;
        if (!flag) {
            scrollIntoView("status");
            flag = true;
        }
    }

    if (newData.password) {
        if (Validator.empty(newData.password)) {
            errors.password = <Translate text="PASSWORD_REQUIRED" />;
            if (!flag) {
                scrollIntoView("password");
                flag = true;
            }
        }


        if (!Validator.empty(newData.password) && newData.password.length < 6) {
            errors.password = <Translate text="PASSWORD_LENGTH" />;
            if (!flag) {
                scrollIntoView("password");
                flag = true;
            }
        }
    }

    if (newData.password_confirmation) {
        if (Validator.empty(newData.password_confirmation)) {
            errors.password_confirmation = <Translate text="CONFIRMATION_PASSWORD" />;
            if (!flag) {
                scrollIntoView("password_confirmation");
                flag = true;
            }
        }

        if (!Validator.empty(newData.password) && !Validator.empty(newData.password_confirmation) && newData.password !== newData.password_confirmation) {
            errors.password_confirmation = <Translate text="PASSWORD_NOT_MATCH" />;
            if (!flag) {
                scrollIntoView("password_confirmation");
                flag = true;
            }
        }
    }

    if (Validator.empty(data.team_role)) {
        errors.team_role = <Translate text="ROLE_REQUIRED" />;
        if (!flag) {
            scrollIntoView("role");
            flag = true;
        }
    }

    if (Validator.empty(data.credits) && data.team_role == "agent") {
        errors.credits = <Translate text="MONTHLY_CREDIT_LIMIT_REQUIRED" />;
        if (!flag) {
            scrollIntoView("credits");
            flag = true;
        }
    }

    if (!Validator.empty(data.credits) && (data.credits > 100000) && data.team_role == "agent") {
        errors.credits = <Translate text="AMOUNT_CHAR_TEAM" />;
        if (!flag) {
            scrollIntoView("credits");
            flag = true;
        }
    }


    return {
        isValid: isEmpty(errors),
        errors
    }
}

export default validateEditTeamUser;