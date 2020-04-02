import React from "react";
import Validator from 'is_js';
import { isEmpty } from 'lodash';
import { Translate } from "components";
import { scrollIntoView } from 'utils';

function validatePersonalDetails(data, agency) {
    let errors = {};
    let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    let flag = false;

    if (data.first_name) {
        if (Validator.empty(data.first_name)) {
            errors.first_name = <Translate text="FIRST_NAME_REQUIRED" />;
            if (!flag) {
                scrollIntoView("first_name");
                flag = true;
            }
        }


        if (format.test(data.first_name) || /\d/.test(data.first_name)) {
            errors.first_name = "Special characters aren't allowed";
            if (!flag) {
                scrollIntoView("first_name");
                flag = true;
            }
        }
    }
    if (data.last_name) {
        if (format.test(data.last_name) || /\d/.test(data.last_name)) {
            errors.last_name = "Special characters aren't allowed";
            if (!flag) {
                scrollIntoView("last_name");
                flag = true;
            }
        }
    }

    if (data.mobile) {
        if (!Validator.empty(data.mobile) && data.mobile && data.mobile.length > 18) {
            errors.mobile = <Translate text="INVALID_MOBILE" />;
            if (!flag) {
                scrollIntoView("mobile");
                flag = true;
            }
        }

        if (!Validator.empty(data.mobile) && data.mobile && data.mobile.length < 9) {
            errors.mobile = <Translate text="INVALID_MOBILE" />;
            if (!flag) {
                scrollIntoView("mobile");
                flag = true;
            }
        }
    }

    if (data.landline_no) {
        if (!Validator.empty(data.landline_no) && data.landline_no && (data.landline_no.length < 10 || data.landline_no.length > 15)) {
            errors.landline_no = <Translate text="INVALID_NUMBER" />;
            if (!flag) {
                scrollIntoView("landline");
                flag = true;
            }
        }
    }

    if (agency) {
        if (Validator.empty(data.company_name)) {
            errors.company_name = <Translate text="COMPANY_NAME_REQUIRED" />;
            if (!flag) {
                scrollIntoView("company_name");
                flag = true;
            }
        }
    }
    // if (Validator.empty(data.last_name)) {
    //     errors.last_name = <Translate text="LAST_NAME_REQUIRED" />;
    // }

    // if (Validator.empty(data.email)) {
    //     errors.email = <Translate text="EMAIL_REQUIRED" />;
    // }

    // if (!Validator.empty(data.email) && !Validator.email(data.email)) {
    //     errors.email = <Translate text="VALID_EMAIL" />;
    // }

    // if (Validator.empty(data.mobile)) {
    //     errors.mobile = <Translate text="MOBILE_NUMBER_REQUIRED" />;
    // }

    return {
        isValid: isEmpty(errors),
        errors
    }
}

export default validatePersonalDetails;