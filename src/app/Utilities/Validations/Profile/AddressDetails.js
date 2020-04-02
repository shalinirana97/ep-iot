import React from "react";
import Validator from 'is_js';
import { isEmpty } from 'lodash';
import { Translate } from "components";

function validateAddressDetails(data) {
    let errors = {};

    if(Validator.empty(data.agency_name)) {
        errors.agency_name = <Translate text="COMPANY_NAME_REQUIRED" />;
    }

    if(Validator.empty(data.address_line2)) {
        errors.address_line1 = <Translate text="ADDRESS_REQUIRED" />;
    }

    if(Validator.empty(data.country)) {
        errors.country = <Translate text="COUNTRY_REQUIRED" />;
    }

    if(Validator.empty(data.state)) {
        errors.state = <Translate text="STATE_REQUIRED" />;
    }

    if(Validator.empty(data.city)) {
        errors.city = <Translate text="CITY_REQUIRED" />;
    }

    if(Validator.empty(data.postcode)) {
        errors.postcode = <Translate text="POSTCODE_REQUIRED" />;
    }

    return {
        isValid: isEmpty(errors),
        errors
    }
}

export default validateAddressDetails;