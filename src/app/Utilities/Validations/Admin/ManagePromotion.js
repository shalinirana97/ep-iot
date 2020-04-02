import Validator from "is_js";
import { isEmpty } from "lodash";

function validateMangePromotion(data) {
  let errors = {};

  // if(Validator.empty(data.promotion_type)) {
  //     errors.promotion_type = 'Promotion Type is required !';
  // }

  // if(Validator.empty(data.promocode)) {
  //     errors.promocode = 'Promocode is required !';
  // }

  // if(Validator.empty(data.active_date_from)) {
  //     errors.active_date_from = 'Active Date is required !';
  // }

  // if(Validator.empty(data.active_date_to)) {
  //     errors.active_date_to = 'Active Date is required !';
  // }

  return {
    isValid: isEmpty(errors),
    errors
  };
}

export default validateMangePromotion;
