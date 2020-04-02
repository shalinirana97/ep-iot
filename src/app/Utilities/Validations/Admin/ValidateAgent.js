import React from "react";
import Validator from "is_js";
import { isEmpty } from "lodash";
import { Translate } from "components";
import { scrollIntoView } from "utils";


function validateAgent(data , user_type, phonenumberlength) {
  let errors = {};
  let flag = false; 
  let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  
  if (user_type === "individual" && Validator.empty(data.first_name)) {
    errors.first_name = "First Name is required!";
    if (!flag) {
      scrollIntoView("first_name");
      flag = true;
    }
  }

  if (format.test(data.first_name) || /\d/.test(data.first_name)) {
    errors.first_name = "First Name should not contain Special Characters or Number!";
      if (!flag) {
      scrollIntoView("first_name");
      flag = true;
    }
  }

  if (format.test(data.last_name) || /\d/.test(data.last_name)) {
    errors.last_name = "Last Name should not contain Special Characters or Number!";
    if (!flag) {
      scrollIntoView("last_name");
      flag = true;
    }
  }

  if (user_type === "individual" && Validator.empty(data.last_name)) {
    errors.last_name = "Last Name is required!";
    if (!flag) {
      scrollIntoView("last_name");
      flag = true;
    }
  }


  if (user_type === "office" && Validator.empty(data.company_name)) {
    errors.company_name = "Company Name Required!";
    if (!flag) {
      scrollIntoView("company_name");
      flag = true;
    }
  }

  if (Validator.empty(data.email)) {
    errors.email = "Email is required!";
    if (!flag) {
      scrollIntoView("email");
      flag = true;
    }
  }
  if (Validator.empty(data.role)) {
    errors.role = "Role is required!";
  }

  if (Validator.empty(data.userName)) {
    errors.userName = "Username is required!";
  }

  if (!Validator.empty(data.email) && !Validator.email(data.email)) {
    errors.email = "Invalid email!";
    if (!flag) {
      scrollIntoView("email");
      flag = true;
    }
  }

  if (Validator.empty(data.mobile) || data.mobile === undefined) {
    errors.mobile = "Mobile Number is required!";
    if (!flag) {
      scrollIntoView("tel-input-box");
      flag = true;
    }
  }

  if (!Validator.empty(data.mobile) && data.mobile && data.mobile.length != phonenumberlength) {
    errors.mobile = <Translate text="INVALID_PHONE" />;
    if (!flag) {
      scrollIntoView("tel-input-box");
      flag = true;
    }
  }

  // if (!Validator.empty(data.mobile) && data.mobile && data.mobile.length < 9) {
  //   errors.mobile = <Translate text="INVALID_PHONE" />;
  //   if (!flag) {
  //     scrollIntoView("tel-input-box");
  //     flag = true;
  //   }
  // }


  if (Validator.empty(data.password)) {
    errors.password = "Password is required!";
    if (!flag) {
      scrollIntoView("password");
      flag = true;
    }
  }

  if (!Validator.empty(data.password) && data.password.length < 6) {
    errors.password = "Your password must be atleast 6 characters long!";
    if (!flag) {
      scrollIntoView("password");
      flag = true;
    }
  }

  if (Validator.empty(data.password_confirmation)) {
    errors.password_confirmation = "Confirmation Password is required!";
    if (!flag) {
      scrollIntoView("password_confirmation");
      flag = true;
    }
  }

  if (
    !Validator.empty(data.password) &&
    !Validator.empty(data.password_confirmation) &&
    data.password !== data.password_confirmation
  ) {
    errors.password_confirmation =
      "Password & Confirmation Password doesn't matched!";
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

export default validateAgent;