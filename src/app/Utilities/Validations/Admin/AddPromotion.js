import Validator from "is_js";
import { isEmpty } from "lodash";
import { scrollIntoView } from "utils";

function validateAddPromotion(data) {
  let errors = {};
  let flag = false;

  if (Validator.empty(data.promotion_type)) {
    errors.promotion_type = "Promotion Type is required!";

    if (!flag) {
      scrollIntoView("promocode_type");
      flag = true;
    }
  }

  if (!data.date_from) {
    errors.date_from = "Please Select Start Date!";
  }

  if (!data.date_to) {
    errors.date_to = "Please Select End Date!";
  }

  if (
    Validator.empty(data.select_product_buy) &&
    data.promotion_type !== "First Time" && data.promotion_type !=="Holiday/Seasonal"
  ) {
    errors.select_product_buy = "Product is required!";
    if (!flag) {
      scrollIntoView("select_product_buy");
      flag = true;
    }
  }

  if (
    Validator.empty(data.criteria_type_buy) &&
    data.promotion_type !== "First Time" && data.promotion_type !== "Holiday/Seasonal"
  ) {
    errors.criteria_type_buy = "Criteria Type is required!";
    if (!flag) {
      scrollIntoView("creteria_product_buy");
      flag = true;
    }
  }

  if (
    Validator.empty(data.criteria_buy) &&
    data.promotion_type !== "First Time" && data.promotion_type !== "Holiday/Seasonal"
  ) {
    errors.criteria_buy = "Criteria is required!";
    if (!flag) {
      scrollIntoView("criteria_buy");
      flag = true;
    }
  }

  if (
    !Validator.empty(data.criteria_buy) &&
    data.criteria_type_buy === "Quantity Bought"
  ) {
    if (!Number.isInteger(Number(data.criteria_buy))) {
      errors.criteria_buy = "Value should be integer!";
    }
    if (!flag) {
      scrollIntoView("criteria_buy");
      flag = true;
    }
  }

  if (
    Validator.empty(data.select_product_gets) &&
    (data.promotion_type === "Based on X Promote Y" ||
      data.promotion_type === "Geographical" ||
      data.promotion_type === "")
  ) {
    errors.select_product_gets = "Product is required!";
    if (!flag) {
      scrollIntoView("select_product_gets");
      flag = true;
    }
  }

  if (Validator.empty(data.discount_type_gets)) {
    errors.discount_type_gets = "Discount Type is required!";
    if (!flag) {
      scrollIntoView("discount_type_gets");
      flag = true;
    }
  }

  if (Validator.empty(data.discount) && data.discount_type_gets !== "Free") {
    errors.discount = "Discount is required!";
    if (!flag) {
      scrollIntoView("discount");
      flag = true;
    }
  }

  if (
    !Validator.empty(data.discount_type_gets) &&
    data.discount_type_gets === "Percentage"
  ) {
    if (data.discount > 100) {
      errors.discount = "Percentage Value should be less than 100!";
    }
    if (!flag) {
      scrollIntoView("discount");
      flag = true;
    }
  }

  if (
    !Validator.empty(data.discount_type_gets) &&
    data.discount_type_gets === "Fixed"
  ) {
    if (data.discount > 10000) {
      errors.discount = "Amount value should be less than 100!";
    }
    if (!flag) {
      scrollIntoView("discount");
      flag = true;
    }
  }

  // if(Validator.empty(data.date_from)) {
  //     errors.date_from = 'Date is required !';
  // }

  // if(Validator.empty(data.date_to)) {
  //     errors.date_to = 'Date is required !';
  // }

  // if(Validator.empty(data.transaction_amount)) {
  //     errors. transaction_amount = 'Transaction Amount is required !';
  // }

    if(Validator.empty(data.date_from)) {
        errors.date_from = 'Date is required!';
    } 
    
    if(Validator.empty(data.date_to)) {
        errors.date_to = 'Date is required!';
    } 

    // if(Validator.empty(data.transaction_amount)) {
    //     errors. transaction_amount = 'Transaction Amount is required !';
    // }

    if(Validator.empty(data.promocode_distribution)) {
        errors.promocode_distribution = 'Promocode Distribution is required!';
        if (!flag) {
            scrollIntoView("promocode_distribution");
            flag = true;
        }
    }

  // if(Validator.empty(data.schedule_details)) {
  //     errors.schedule_details = 'Schedule Details is required !';
  // }

  if (Validator.empty(data.promocode)) {
    errors.promocode = "Promocode is required!";
    if (!flag) {
      scrollIntoView("promocode");
      flag = true;
    }
  }

  if (Validator.empty(data.status)) {
    errors.status = "Status is required!";
    if (!flag) {
      scrollIntoView("status");
      flag = true;
    }
  }

  if (Validator.empty(data.description)) {
    errors.description = 'Description is required!';
  } 

  return {
    isValid: isEmpty(errors),
    errors
  };
}

export default validateAddPromotion;
