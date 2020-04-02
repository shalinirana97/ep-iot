import React from "react";
import Validator from 'is_js';
import { isEmpty } from 'lodash';
import { Translate } from "components";
import { scrollIntoView } from 'utils';

function validateCreateProject(data) {
    let errors = {};
    let flag = false;

    if (Validator.empty(data.name)) {
        errors.name = <Translate name="PROJECT_REQUIRED" />;
        if (!flag) {
            scrollIntoView("name");
            flag = true;
        }
    }

    return {
        isValid: isEmpty(errors),
        errors
    }
}

export default validateCreateProject;