import React from "react";
import Validator from 'is_js';
import { isEmpty } from 'lodash';
import { Translate } from "components";
import {scrollIntoView} from 'utils';

function validateSocialMedia(data) {
    let errors = {};
    let flag=false;

    if(Validator.empty(data.timeZone)) {
        errors.timeZone = <Translate text="TIMEZONE_REQUIRED" />;
        if (!flag) {
            scrollIntoView("timezone");
            flag = true;
          }
    }

    return {
        isValid: isEmpty(errors),
        errors
    }
}

export default validateSocialMedia;