export const GET_PROMOTIONS = '[DIALOG] GET';
export const GET_PROMOTION_BY_ID = '[DIALOG] GET';
export const ADD_PROMOTION = '[DIALOG] ADD';
export const EDIT_PROMOTION = '[DIALOG] EDIT';
export const DELETE_PROMOTION = '[DIALOG] DELETE';


export const getAllPromotions = () => {
    return {
        type: GET_PROMOTIONS
    }
}

export const getPromotionById = (id) => {
    return {
        type: GET_PROMOTION_BY_ID,
        id
    }
}

export const addPromotion = (options) => {
    return {
        type: ADD_PROMOTION,
        options
    }
}


export const editPromotion = (options) => {
    return {
        type: EDIT_PROMOTION,
        options
    }
}

export const deletePromotion = (options) => {
    return {
        type: DELETE_PROMOTION,
        options
    }
}

