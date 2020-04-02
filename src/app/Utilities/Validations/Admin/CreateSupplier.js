import React from "react";
import Validator from "is_js";
import { isEmpty } from "lodash";
import { Translate } from "components";
import { scrollIntoView } from "utils";

function validateCreateSupplier(data, phonenumberlength) {
  let errors = {};
  let flag = false;
  let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;


  if (Validator.empty(data.supplier_company_name)) {
    errors.supplier_company_name = "Supplier Company Name is required!";

    if (!flag) {
      scrollIntoView("supplier_company_name");
      flag = true;
    }
  }

  if (Validator.empty(data.first_name)) {
    errors.first_name = "First Name is required!";
    
    if (!flag) {
      scrollIntoView("first_name");
      flag = true;
    }

  }

  if (format.test(data.first_name) || /\d/.test(data.first_name)) {
    errors.first_name = "First Name should not contain Special Characters or Number!";

    if (!flag) {
      scrollIntoView("last_name");
      flag = true;
    }

  }

  if (Validator.empty(data.last_name)) {
    errors.last_name = "Last Name is required!";
  }

  if (format.test(data.last_name) || /\d/.test(data.last_name)) {
    errors.last_name = "Last Name should not contain Special Characters or Number!";
  }

  if (Validator.empty(data.email)) {
    errors.email = "Email is required!";

    if (!flag) {
      scrollIntoView("email");
      flag = true;
    }

  }

  if (!Validator.empty(data.email) && !Validator.email(data.email)) {
    errors.email = "Invalid email !";

      if (!flag) {
      scrollIntoView("email");
      flag = true;
      }
    
  }

  if (
    Validator.empty(data.mobile_number) ||
    data.mobile_number === undefined
  ) {
    errors.mobile = "Mobile Number is required!";

    if (!flag) {
      scrollIntoView("tel-input-box");
      flag = true;
    }

  }


  if (!Validator.empty(data.mobile_number) && data.mobile_number && data.mobile_number.length != phonenumberlength) {
    errors.mobile = <Translate text="INVALID_PHONE" />;

    if (!flag) {
      scrollIntoView("tel-input-box");
      flag = true;
    }
  }

  // if (!Validator.empty(data.mobile_number) && data.mobile_number && data.mobile_number.length < 9) {
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

  // if (!data.selectedOption.length) {
  //   errors.products_catered = "Product is required !";
  // }

  if (Validator.empty(data.no_of_editors)) {
    errors.number_of_editors = "Number of Editors is required!";
   
    if (!flag) {
      scrollIntoView("no_of_editors");
      flag = true;
    }
  }

  
  if (data.original_supplier_contract == null) {
    errors.original_supplier_contract = "Original Supplier Contract is required!";
   
    if (!flag) {
      scrollIntoView("original_supplier_contract");
      flag = true;
    }
  }

  if (data.signed_supplier_contract == null ) {
    errors.signed_supplier_contract = "Signed Supplier Contract is required!";

    if (!flag) {
      scrollIntoView("signed_supplier_contract");
      flag = true;
    }

  }

  if (Validator.empty(data.status)) {
    errors.status = "Status is required!";
  }

  return {
    isValid: isEmpty(errors),
    errors
  };
}

export default validateCreateSupplier;
