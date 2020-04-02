import React from "react";
import Validator from 'is_js';
import { isEmpty } from 'lodash';
import { Translate } from "components";

function validateFloorPlans(data) {
    let errors = {};

    if(Validator.empty(data.sizing)) {
        errors.sizing = <Translate text="FLOORPLAN_SIZING" />;
    }

    if(Validator.empty(data.fileType)) {
        errors.fileType = <Translate text="FILETYPE_REQUIRED" />;
    }

    if(Validator.empty(data.agencyLogo)) {
        errors.agencyLogo = <Translate text="AGENCYLOGO_REQUIRED" />;
    }

    if(Validator.empty(data.brandingFont)) {
        errors.brandingFont = <Translate text="BRANDINGFONT_REQUIRED" />;
    }

    if(Validator.empty(data.address)) {
        errors.address = <Translate text="ADDRESS_REQUIRED" />;
    }

    if(Validator.empty(data.brandingLook)) {
        errors.brandingLook = <Translate text="BRANDINGLOOK_REQUIRED" />;
    }

    if(Validator.empty(data.brandingColor)) {
        errors.brandingColor = <Translate text="BRANDINGCOLOR_REQUIRED" />;
    }

    if(Validator.empty(data.planOrientation)) {
        errors.planOrientation = <Translate text="PLANORIENTATION_REQUIRED" />;
    }

    if(Validator.empty(data.pageOrientation)) {
        errors.pageOrientation = <Translate text="PAGEORIENTATION_REQUIRED" />;
    }

    return {
        isValid: isEmpty(errors),
        errors
    }
}

export default validateFloorPlans;