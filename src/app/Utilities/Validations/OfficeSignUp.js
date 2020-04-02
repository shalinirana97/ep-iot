import React from "react";
import Validator from 'is_js';
import { isEmpty } from 'lodash';
import { Translate } from "components";

function validateOfficeSignUp(data){
    let errors = {};

    if(Validator.empty(data.agency_name)) {
        errors.agency_name = <Translate text="COMPANY_NAME_REQUIRED" />;
    }

    if(Validator.empty(data.email)) {
        errors.email = <Translate text="EMAIL_REQUIRED" />;
    }

    if(!Validator.empty(data.email) && !Validator.email(data.email)) {
        errors.email = <Translate text="INVALID_EMAIL" />;
    }

    if(Validator.empty(data.mobile)) {
        errors.mobile = <Translate text="MOBILE_NUMBER_REQUIRED" />;
    }

    if(Validator.empty(data.user_type)) {    
        errors.user_type = <Translate text="USER_TYPE_REQUIRED" />;
    }

    if(Validator.empty(data.password)) {
        errors.password = <Translate text="PASSWORD_REQUIRED" />;
    }

    if(!Validator.empty(data.password) && data.password.length < 6) {
        errors.password = <Translate text="PASSWORD_LENGTH" />;
    }

    if(Validator.empty(data.password_confirmation)) {
        errors.password_confirmation = <Translate text="CONFIRMATION_PASSWORD" />;
    }

    if (!Validator.empty(data.password) && !Validator.empty(data.password_confirmation) && data.password!== data.password_confirmation) {
        errors.password_confirmation = <Translate text="PASSWORD_NOT_MATCH" />;
    }
}

export default validateOfficeSignUp;