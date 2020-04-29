export const GET_DEVICES = '[DIALOG] GET';
export const GET_DEVICE_BY_ID = '[DIALOG] GET';
export const ADD_DEVICE = '[DIALOG] ADD';
export const EDIT_DEVICE = '[DIALOG] EDIT';
export const DELETE_DEVICE = '[DIALOG] DELETE';


export const getAllDeviceDetails = () => {
    return {
        type: GET_DEVICES
    }
}

export const getDeviceById = (id) => {
    return {
        type: GET_DEVICE_BY_ID,
        id
    }
}

export const addDeviceDetail = (options) => {
    return {
        type: ADD_DEVICE,
        options
    }
}


export const editDeviceDetail = (options) => {
    return {
        type: EDIT_DEVICE,
        options
    }
}

export const deleteDeviceDetail = (options) => {
    return {
        type: DELETE_DEVICE,
        options
    }
}

