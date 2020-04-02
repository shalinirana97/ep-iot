import React from "react";
import Validator from 'is_js';
import  { isEmpty } from 'lodash';
import { Translate } from "components";

function validateVerifyOtp(data) {
    let errors = {};

    if(Validator.empty(data.otp)) {
        errors.otp = <Translate text="OTP_REQUIRED" />;
    }

    return {
        isValid: isEmpty(errors),
        errors
    }
}

export default validateVerifyOtp;