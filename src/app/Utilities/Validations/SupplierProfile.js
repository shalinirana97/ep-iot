import React from "react";
import Validator from 'is_js';
import { isEmpty } from 'lodash';
import { Translate } from "components";
import { scrollIntoView } from 'utils';

function validateSupplierProfile(data, newData) {
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

    if (Validator.empty(data.company_name)) {
        errors.company_name = <Translate text="COMPANY_REQUIRED" />;
        if (!flag) {
            scrollIntoView("company_name");
            flag = true;
        }
    }

    if (Validator.empty(data.address)) {
        errors.address = <Translate text="ADDRESS_REQUIRED" />;
        if (!flag) {
            scrollIntoView("google-input");
            flag = true;
        }
    }

    // if(!Validator.empty(data.primary_contact_email) && !Validator.email(data.primary_contact_email)) {
    //     errors.primary_contact_email = <Translate text="INVALID_EMAIL" />;
    // }

    if (Validator.empty(data.primary_contact_phone)) {
        errors.primary_contact_phone = <Translate text="PHONE_NUMBER_REQUIRED" />;
        if (!flag) {
            scrollIntoView("primary_contact_phone");
            flag = true;
        }
    }

    if (!Validator.empty(data.primary_contact_phone) && data.primary_contact_phone && data.primary_contact_phone.length > 15) {
        errors.primary_contact_phone = <Translate text="INVALID_PHONE" />;
        if (!flag) {
            scrollIntoView("primary_contact_phone");
            flag = true;
        }
    }

    if (!Validator.empty(data.primary_contact_phone) && data.primary_contact_phone && data.primary_contact_phone.length < 10) {
        errors.primary_contact_phone = <Translate text="INVALID_PHONE" />;
        if (!flag) {
            scrollIntoView("primary_contact_phone");
            flag = true;
        }
    }

    if (data.secondary_contact_email) {
        if (Validator.empty(data.secondary_contact_email)) {
            errors.secondary_contact_email = <Translate text="EMAIL_REQUIRED" />;
        }

        if (!Validator.empty(data.secondary_contact_email) && !Validator.email(data.secondary_contact_email)) {
            errors.secondary_contact_email = <Translate text="INVALID_EMAIL" />;
        }
    }

    if (data.secondary_contact_phone) {
        if (!Validator.empty(data.secondary_contact_phone) && data.secondary_contact_phone && data.secondary_contact_phone.length > 15) {
            errors.secondary_contact_phone = <Translate text="INVALID_PHONE" />;
            if (!flag) {
                scrollIntoView("secondary_contact_phone");
                flag = true;
            }
        }

        if (!Validator.empty(data.secondary_contact_phone) && data.secondary_contact_phone && data.secondary_contact_phone.length < 10) {
            errors.secondary_contact_phone = <Translate text="INVALID_PHONE" />;
            if (!flag) {
                scrollIntoView("secondary_contact_phone");
                flag = true;
            }
        }
    }

    if (Validator.empty(data.after_hours_contact_email)) {
        errors.after_hours_contact_email = <Translate text="EMAIL_REQUIRED" />;
        if (!flag) {
            scrollIntoView("after_hours_contact_email");
            flag = true;
        }
    }

    if (!Validator.empty(data.after_hours_contact_email) && !Validator.email(data.after_hours_contact_email)) {
        errors.after_hours_contact_email = <Translate text="INVALID_EMAIL" />;
        if (!flag) {
            scrollIntoView("after_hours_contact_email");
            flag = true;
        }
    }

    if (Validator.empty(data.after_hours_contact_phone)) {
        errors.after_hours_contact_phone = <Translate text="PHONE_NUMBER_REQUIRED" />;
        if (!flag) {
            scrollIntoView("after_hours_contact_phone");
            flag = true;
        }
    }

    if (!Validator.empty(data.after_hours_contact_phone) && data.after_hours_contact_phone && data.after_hours_contact_phone.length > 15) {
        errors.after_hours_contact_phone = <Translate text="INVALID_PHONE" />;
        if (!flag) {
            scrollIntoView("after_hours_contact_phone");
            flag = true;
        }
    }

    if (!Validator.empty(data.after_hours_contact_phone) && data.after_hours_contact_phone && data.after_hours_contact_phone.length < 10) {
        errors.after_hours_contact_phone = <Translate text="INVALID_PHONE" />;
        if (!flag) {
            scrollIntoView("after_hours_contact_phone");
            flag = true;
        }
    }

    if (Validator.empty(data.timezone)) {
        errors.timezone = <Translate text="TIMEZONE_REQUIRED" />;
        if (!flag) {
            scrollIntoView("timezone");
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

        if (!Validator.empty(newData.password) && newData.password && newData.password.length < 6) {
            errors.password = <Translate text="PASSWORD_LENGTH" />;
            if (!flag) {
                scrollIntoView("password");
                flag = true;
            }
        }

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
    return {
        isValid: isEmpty(errors),
        errors
    }
}

export default validateSupplierProfile;