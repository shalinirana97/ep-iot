import React from "react";
import Validator from "is_js";
import { isEmpty } from "lodash";
import { Translate } from "components";
import { scrollIntoView } from "utils";

function validateChangePassword(data) {
  let errors = {};
  let flag = false;

  if (!Validator.empty(data.password) && data.password.length < 6) {
    errors.password = <Translate text="PASSWORD_LENGTH" />;
    if (!flag) {
      scrollIntoView("password");
      flag = true;
    }
  }

    if(data.password){
        if (Validator.empty(data.password_confirmation)) {
            errors.password_confirmation = <Translate text="PASSWORD_CONFIRMATION_REQUIRED" />;
            if (!flag) {
                scrollIntoView("password_confirmation");
                flag = true;
              }
        }
    }

    if(!Validator.empty(data.password_confirmation) && data.password !== data.password_confirmation) {
        errors.password_confirmation = <Translate text="PASSWORD_NOT_MATCH" />;
        if (!flag) {
            scrollIntoView("password_confirmation");
            flag = true;
          }
    }

  if (!Validator.empty(data.password) &&!Validator.empty(data.password_confirmation) && data.password !== data.password_confirmation) {
    errors.password_confirmation = <Translate text="PASSWORD_NOT_MATCH" />;
    if (!flag) {
      scrollIntoView("password_confirmation");
      flag = true;
    }
  }

  return {
    isValid: isEmpty(errors),
    errors
  };
}

export default validateChangePassword;
