import React from "react";
import Validator from "is_js";
import { isEmpty } from "lodash";
import { scrollIntoView } from "utils";


function validateAgent(data, phonenumberlength) {
    let errors = {};
    let flag = false;
    let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    const stongRegex = /^(?=.*[a-z])()(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#(,.)};{^[:*<>?$%&*\]])(?=.{8,})/

    if (Validator.empty(data.agentName)) {
        errors.agentName = "Agent Name is required!";
        if (!flag) {
            scrollIntoView("agentName");
            flag = true;
        }
    }

    if (format.test(data.agentName) || /\d/.test(data.agentName)) {
        errors.agentName = "Agent Name should not contain Special Characters or Number!";
        if (!flag) {
            scrollIntoView("agentName");
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
        errors.mobile = "Invalid Mobile Number!";
        if (!flag) {
            scrollIntoView("tel-input-box");
            flag = true;
        }
    }


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

    if (!Validator.empty(data.password) && (!stongRegex.test(data.password) || (/\s/).test(data.password)) ) {
        errors.password = 'Invalid Password, must contain atleast 1 Upper-case, 1 Lower-case, 1 symbol, 1 number !'
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

export default validateAgent;