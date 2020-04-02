import React from "react";
import Validator from 'is_js';
import { isEmpty } from 'lodash';
import { Translate } from "components";
import { scrollIntoView } from "utils";


function validateUser(data, phonenumberlength) {
    let errors = {};
    let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    let flag = false;
    if(Validator.empty(data.first_name)) {
        errors.first_name = <Translate text="FIRST_NAME_REQUIRED" />;
        if (!flag) {
            scrollIntoView("first_name");
            flag = true;
        }
    }

    if(Validator.empty(data.last_name)) {
        errors.last_name = <Translate text="LAST_NAME_REQUIRED" />;
        if (!flag) {
            scrollIntoView("last_name");
            flag = true;
        }
    }

    if (format.test(data.first_name) || /\d/.test(data.first_name)) {
        errors.first_name = <Translate text="FIRST_NAME_VALIDATION" />;
        if (!flag) {
            scrollIntoView("first_name");
            flag = true;
        }
    }

    if (format.test(data.last_name) || /\d/.test(data.last_name)) {
        errors.last_name = <Translate text="LAST_NAME_VALIDATION" />;
        if (!flag) {
            scrollIntoView("last_name");
            flag = true;
        }
    }

    if(Validator.empty(data.email)) {
        errors.email = <Translate text="EMAIL_REQUIRED" />;
        if (!flag) {
            scrollIntoView("email");
            flag = true;
        }
    }
    if(Validator.empty(data.role)) {
        errors.role = <Translate text="ROLE_REQUIRED" />;
        if (!flag) {
            scrollIntoView("role");
            flag = true;
        }
    }

    if(Validator.empty(data.userName)) {
        errors.userName = <Translate text="USERNAME_REQUIRED" />;
        if (!flag) {
            scrollIntoView("userName");
            flag = true;
        }
    }

    if(!Validator.empty(data.email) && !Validator.email(data.email)) {
        errors.email = <Translate text="INVALID_EMAIL" />;
        if (!flag) {
            scrollIntoView("email");
            flag = true;
        }
    }

    if (Validator.empty(data.mobile) || data.mobile === undefined) {
        errors.mobile = <Translate text="MOBILE_NUMBER_REQUIRED" />;
        if (!flag) {
            scrollIntoView("tel-input-box");
            flag = true;
        }
    }

    if ( phonenumberlength &&
      !Validator.empty(data.mobile) &&
      data.mobile &&
      data.mobile.length != phonenumberlength
    ) {
      errors.mobile = <Translate text="INVALID_PHONE" />;
      if (!flag) {
        scrollIntoView("tel-input-box");
        flag = true;
      }
    }

    // if (!Validator.empty(data.mobile) && data.mobile && data.mobile.length < 9) {
    //     errors.mobile = <Translate text="INVALID_PHONE" />;
    //     if (!flag) {
    //         scrollIntoView("tel-input-box");
    //         flag = true;
    //     }
    // }
    
    // if(Validator.empty(data.role)) {    
    //     errors.user_type = <Translate text="ROLE_REQUIRED" />;
    // }

    if(typeof (data.password)==="string" && Validator.empty(data.password)) {
        errors.password = <Translate text="PASSWORD_REQUIRED" />;
        if (!flag) {
            scrollIntoView("password");
            flag = true;
        }
    }

    if(typeof (data.password) === "string" && !Validator.empty(data.password) && data.password.length < 6) {
        errors.password = <Translate text="PASSWORD_LENGTH" />;
        if (!flag) {
            scrollIntoView("password");
            flag = true;
        }
    }

    if(typeof (data.password_confirmation) === "string" && Validator.empty(data.password_confirmation)) {
        errors.password_confirmation = <Translate text="CONFIRMATION_PASSWORD" />;
        if (!flag) {
            scrollIntoView("password_confirmation");
            flag = true;
        }
    }

    if (typeof (data.password_confirmation) === "string" && !Validator.empty(data.password) && !Validator.empty(data.password_confirmation) && data.password!== data.password_confirmation) {
        errors.password_confirmation = <Translate text="PASSWORD_NOT_MATCH" />;
        if (!flag) {
            scrollIntoView("password_confirmation");
            flag = true;
        }
    }

    return {
        isValid: isEmpty(errors),
        errors
    }
}

export default validateUser;