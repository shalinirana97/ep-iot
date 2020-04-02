import Validator from 'is_js';
import  { isEmpty } from 'lodash';

function validateMangeAgent(data) {
    let errors = {};

    // if(Validator.empty(data.type)) {
    //     errors.agent_type = 'Agent Type is required !';
    // }

    // if(Validator.empty(data.name)) {
    //     errors.agent_name = 'Agent Name is required !';
    // }

    // if(Validator.empty(data.email)) {
    //     errors.agent_email = 'Agent Email is required !';
    // }

    if(!Validator.empty(data.email) && !Validator.email(data.email)) {
        errors.agent_email = 'Invalid email!';
    }

    return {
        isValid: isEmpty(errors),
        errors
    }
}

export default validateMangeAgent;