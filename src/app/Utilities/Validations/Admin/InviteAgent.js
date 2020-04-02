import Validator from 'is_js';
import  { isEmpty } from 'lodash';

function validateInviteAgent(data) {
    let errors = {};
    data = data.emails.trim();

    let allmails = data.split(";");

    if(Validator.empty(data.emails)) {
        errors.emails = 'Email is required!';
    }

    allmails.map(mail => {
        if (!Validator.email(mail)) {
            errors.emails = "Invalid Email Exist!";
            return;
        }
    });
    
    return {
        isValid: isEmpty(errors),
        errors
    }
}

export default validateInviteAgent;