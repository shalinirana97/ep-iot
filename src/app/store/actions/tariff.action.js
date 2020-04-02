export const GET_TARIFF = '[DIALOG] GET';
export const ADD_TARIFF = '[DIALOG] ADD';
export const EDIT_TARIFF = '[DIALOG] EDIT';
export const DELETE_TARIFF = '[DIALOG] DELETE';


export const getTariffDetails = () => {
    return {
        type: GET_TARIFF
    }
}

export const addTariffDetail = (options) => {
    return {
        type: ADD_TARIFF,
        options
    }
}


export const editTariffDetail = (options) => {
    return {
        type: EDIT_TARIFF,
        options
    }
}

export const deleteTariffDetail = (options) => {
    return {
        type: DELETE_TARIFF,
        options
    }
}

