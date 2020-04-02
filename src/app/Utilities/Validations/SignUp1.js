import React from "react";
import Validator from 'is_js';
import { isEmpty } from 'lodash';
import { Translate } from "components";
import {scrollIntoView} from 'utils';

function validateSignUp1(data) {
    let errors = {};
    let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    let flag = false;
    

    if (data.user_type == '') {
        if (Validator.empty(data.user_type)) {
            errors.user_type = <Translate text="USER_TYPE_REQUIRED" />
            if (!flag) {
                scrollIntoView("user_type");
                flag = true;
              }
        }
    }

    if (data.user_type == 'office') {
        if (Validator.empty(data.company_name)) {
            errors.company_name = <Translate text="COMPANY_NAME_REQUIRED" />
            if (!flag) {
                scrollIntoView("company_name");
                flag = true;
              }
        }
         else if (data.company_name.length < 3) {
            errors.company_name = <Translate text="COMPANY_NAME_MIN_LENGTH" />
            if (!flag) {
                scrollIntoView("company_name");
                flag = true;
              }
        }
        // else if (data.company_name.length > 20) {
        //     errors.company_name = <Translate text="COMPANY_NAME_MAX_LENGTH" />
        // }
    }

    if (data.user_type == 'individual') {
        if (Validator.empty(data.first_name)) {
            errors.first_name = <Translate text="FIRST_NAME_REQUIRED" />
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
            errors.last_name = <Translate text="LAST_NAME_REQUIRED" />
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
    }

    if (data.first_name == '' && data.last_name == '' && data.user_type == '') {
        if (Validator.empty(data.first_name)) {
            errors.first_name = <Translate text="FIRST_NAME_REQUIRED" />
            if (!flag) {
                scrollIntoView("first_name");
                flag = true;
              }
        }
        else if (format.test(data.last_name) || /\d/.test(data.last_name)) {
            errors.first_name = <Translate text="FIRST_NAME_SPECIAL"
            />;
            if (!flag) {
                scrollIntoView("first_name");
                flag = true;
              }
        }

        if (Validator.empty(data.last_name)) {
            errors.last_name = <Translate text="LAST_NAME_REQUIRED" />
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
    }

    if (Validator.empty(data.email)) {
        errors.email =<Translate text="EMAIL_REQUIRED" />;
        if (!flag) {
            scrollIntoView("email");
            flag = true;
          }
    }

    if (!Validator.empty(data.email) && !Validator.email(data.email)) {
        errors.email = <Translate text="INVALID_EMAIL" />
        if (!flag) {
            scrollIntoView("email");
            flag = true;
          }
    }

    return {
        isValid1: isEmpty(errors),
        errors
    }
}

export default validateSignUp1;