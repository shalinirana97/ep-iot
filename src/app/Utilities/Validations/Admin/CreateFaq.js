import Validator from 'is_js';
import { isEmpty } from 'lodash';

function validFaq(data) {
    let errors = {};

    if (Validator.empty(data.faq_question)) {
        errors.faq_question = "Question is required!";
    }

    if (Validator.empty(data.faq_answer)) {
        errors.faq_answer = "Answer is required!";
    }

    return {
        isValid: isEmpty(errors),
        errors
    }
}

export default validFaq;