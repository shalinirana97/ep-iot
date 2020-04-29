export const GET_AGENCIES = '[DIALOG] GET';
export const GET_AGENCY_BY_ID = '[DIALOG] GET';
export const ADD_AGENCY = '[DIALOG] ADD';
export const EDIT_AGENCY = '[DIALOG] EDIT';
export const DELETE_AGENCY = '[DIALOG] DELETE';


export const getInstallerAgencies = () => {
    return {
        type: GET_AGENCIES
    }
}

export const getInstallerAgencyById = (id) => {
    return {
        type: GET_AGENCY_BY_ID,
        id
    }
}

export const addInstallerAgency = (options) => {
    return {
        type: ADD_AGENCY,
        options
    }
}


export const editInstallerAgency = (options) => {
    return {
        type: EDIT_AGENCY,
        options
    }
}

export const deleteInstallerAgency = (options) => {
    return {
        type: DELETE_AGENCY,
        options
    }
}

