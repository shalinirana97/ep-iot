export const GET_DEVICES = '[DIALOG] GET';
export const ADD_DEVICES = '[DIALOG] ADD';
export const EDIT_DEVICES = '[DIALOG] EDIT';
export const DELETE_DEVICES = '[DIALOG] DELETE';


export const getDevicesDetails = () => {
    return {
        type: GET_DEVICES
    }
}

export const addDeviceDetail = (options) => {
    return {
        type: ADD_DEVICES,
        options
    }
}


export const editDeviceDetail = (options) => {
    return {
        type: EDIT_DEVICES,
        options
    }
}

export const deleteDeviceDetail = (options) => {
    return {
        type: DELETE_DEVICES,
        options
    }
}

