export const GET_CUSTOMERS = '[DIALOG] GET';
export const GET_CUSTOMER_BY_ID = '[DIALOG] GET';
export const ADD_CUSTOMER = '[DIALOG] ADD';
export const EDIT_CUSTOMER = '[DIALOG] EDIT';
export const DELETE_CUSTOMER = '[DIALOG] DELETE';


export const getAllCustomers = () => {
    return {
        type: GET_CUSTOMERS
    }
}

export const getCustomerById = (id) => {
    return {
        type: GET_CUSTOMER_BY_ID,
        id
    }
}

export const addCustomer = (options) => {
    return {
        type: ADD_CUSTOMER,
        options
    }
}


export const editCustomer = (options) => {
    return {
        type: EDIT_CUSTOMER,
        options
    }
}

export const deleteCustomer = (options) => {
    return {
        type: DELETE_CUSTOMER,
        options
    }
}

