import React from "react";
import Validator from 'is_js';
import { isEmpty } from 'lodash';
import { Translate } from "components";
import {scrollIntoView} from 'utils';

function validateInviteUsers(data) {
    let errors = {};
    let flag=false;
   let newdata = data.emails.trim();

    let allmails = newdata.split(";");

    if(Validator.empty(data.emails)) {
        errors.emails = <Translate text="EMAIL_REQUIRED" />;
        if (!flag) {
            scrollIntoView("emails");
            flag = true;
          }
    }

    if(!Validator.empty(data.emails)) {
        const emailArr = data.emails.split(';');
        for(let i in emailArr) {
            if(emailArr[i] && !Validator.email(emailArr[i])){
                errors.emails = <Translate text="INVALID_EMAIL" />;
                break;
            }
            if (!flag) {
                scrollIntoView("emails");
                flag = true;
              }
        }
    }

    /* allmails.map(mail => {
        if (!Validator.empty(data.emails) && !Validator.email(mail)) {
            errors.emails = <Translate text="INVALID_EMAIL_EXIST" />;
            return;
        }
    }); */

    if(Validator.empty(data.role)) {
        errors.role = <Translate text="ROLE_REQUIRED" />;
        if (!flag) {
            scrollIntoView("role");
            flag = true;
          }
    }

    if(Validator.empty(data.credit_limit)  && data.role === "agent") {
        errors.credit_limit = <Translate text="CREDIT_LIMIT_REQUIRED" />;
        if (!flag) {
            scrollIntoView("credit_limit");
            flag = true;
          }
    }

    if (!Validator.empty(data.credit_limit) && (data.credit_limit > 100000) && data.role === "agent") {
        errors.credit_limit = <Translate text="AMOUNT_CHAR_TEAM" />;
        if (!flag) {
            scrollIntoView("credit_limit");
            flag = true;
        }
    }

    return {
        isValid: isEmpty(errors),
        errors
    }
}

export default validateInviteUsers;