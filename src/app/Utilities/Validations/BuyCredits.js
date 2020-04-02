import React from "react";
import Validator from 'is_js';
import { isEmpty } from 'lodash';
import { Translate } from "components";
import { scrollIntoView } from 'utils';

function validateBuyCredits(data) {
    let errors = {};
    let flag = false;
    let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    // if (Validator.empty(data.payment_method)) {
    //     errors.payment_method = <Translate text="PAYMENT_METHOD_REQUIRED" />; 
    // }
    if (Validator.empty(data.card_number)) {
        errors.card_number = <Translate text="CARD_NUMBER_REQUIRED" />;
        if (!flag) {
            scrollIntoView("card-input");
            flag = true;
        }
    }

    if (Validator.empty(data.card_name)) {
        errors.card_name = <Translate text="CARD_NAME_REQUIRED" />;
        if (!flag) {
            scrollIntoView("card_name");
            flag = true;
        }
    }

    if (format.test(data.card_name) || /\d/.test(data.card_name)) {
        errors.card_name = <Translate text="CARD_NAME_SPECIAL"
        />;
        if (!flag) {
            scrollIntoView("card_name");
            flag = true;
          }
        }

    if (Validator.empty(data.date)) {
        errors.date = <Translate text="DATE_REQUIRED" />;
        if (!flag) {
            scrollIntoView("date");
            flag = true;
        }
    }

    if (Validator.empty(data.CVN)) {
        errors.CVN = <Translate text="CVN_REQUIRED" />;
        if (!flag) {
            scrollIntoView("cvn");
            flag = true;
        }
    }

    // if(!Validator.empty(data.CVN) &&  data.CVN.length < 3 || data.CVN.length > 3 ) {
    //     errors.CVN = <Translate text="INVALID_CVN" />;
    // }

    if (!Validator.empty(data.CVN) && isNaN(data.CVN)) {
        errors.CVN = <Translate text="INVALID_CVN" />;
        if (!flag) {
            scrollIntoView("cvn");
            flag = true;
        }
    }

    if (!data.amount) {
        errors.amount = <Translate text="AMOUNT_REQUIRED" />;
        if (!flag) {
            scrollIntoView("custom_amount");
            flag = true;
        }
    }

    // if(!Validator.empty(data.amount) && (data.amount == 0)) {
    //     errors.custom_amount = <Translate text="INVALID_AMOUNT" />;
    // }

    // if(!Validator.empty(data.custom_amount) && isNaN(data.custom_amount)) {
    //     errors.custom_amount = <Translate text="INVALID_AMOUNT" />;
    //     if (!flag) {
    //         scrollIntoView("custom_amount");
    //         flag = true;
    //       }
    // }

    if (!Validator.empty(data.custom_amount) && (data.custom_amount > 100000)) {
        errors.custom_amount = <Translate text="AMOUNT_CHAR" />;
        if (!flag) {
            scrollIntoView("custom_amount");
            flag = true;
        }
    }

    return {
        isValid: isEmpty(errors),
        errors
    }
}

export default validateBuyCredits;