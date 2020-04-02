import React from "react";
import Validator from 'is_js';
import { isEmpty } from 'lodash';
import { Translate } from "components";

function validateAerialEditing(data) {
    let errors = {};

    if(Validator.empty(data.brandingLook)) {
        errors.brandingLook = <Translate text="BRANDINGLOOK_REQUIRED" />;
    }

    if(Validator.empty(data.brandingFont)) {
        errors.brandingFont = <Translate text="BRANDINGFONT_REQUIRED" />;
    }

    if(Validator.empty(data.brandingColor)) {
        errors.brandingColor = <Translate text="BRANDINGCOLOR_REQUIRED" />;
    }

    return {
        isValid: isEmpty(errors),
        errors
    }
}

export default validateAerialEditing;