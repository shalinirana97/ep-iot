import React from "react";
import Validator from 'is_js';
import { isEmpty } from 'lodash';
import { isValidPhoneNumber } from "react-phone-number-input";
import { Translate } from "components";
import {scrollIntoView} from 'utils';

function validateSignUp(data) {
  let errors = {};
    let flag = false;

  if (Validator.empty(data.mobile) || data.mobile == undefined) {
    errors.mobile = <Translate text="MOBILE_NUMBER_REQUIRED" />;
    if (!flag) {
      scrollIntoView("mobile");
      flag = true;
    }
  }

  if (!Validator.empty(data.mobile) && data.mobile && data.mobile.length > 15) {
    errors.mobile = <Translate text="INVALID_PHONE" />;
    if (!flag) {
      scrollIntoView("mobile");
      flag = true;
    }
  }

  if (!Validator.empty(data.mobile) && data.mobile && data.mobile.length < 9) {
    errors.mobile = <Translate text="INVALID_PHONE" />;
    if (!flag) {
      scrollIntoView("mobile");
      flag = true;
    }
  }
  // if (data.mobile && !isValidPhoneNumber(data.mobile)) {
  //     errors.mobile = "Invalid Number";
  // }

  if (!data.password) {
    if (Validator.empty(data.password)) {
      errors.password = <Translate text="PASSWORD_REQUIRED" />;
      if (!flag) {
        scrollIntoView("password");
        flag = true;
      }
    }
  }

  if (
    !Validator.empty(data.password) &&
    data.password &&
    data.password.length < 6
  ) {
    errors.password = <Translate text="PASSWORD_LENGTH" />;
    if (!flag) {
      scrollIntoView("password");
      flag = true;
    }
  }

  if (Validator.empty(data.password_confirmation)) {
    errors.password_confirmation = <Translate text="CONFIRMATION_PASSWORD" />;
    if (!flag) {
      scrollIntoView("password");
      flag = true;
    }
  }

  if (
    !Validator.empty(data.password) &&
    !Validator.empty(data.password_confirmation) &&
    data.password !== data.password_confirmation
  ) {
    errors.password_confirmation = <Translate text="PASSWORD_NOT_MATCH" />;
    if (!flag) {
      scrollIntoView("password");
      flag = true;
    }
  }

  return {
    isValid: isEmpty(errors),
    errors
  };
}

export default validateSignUp;