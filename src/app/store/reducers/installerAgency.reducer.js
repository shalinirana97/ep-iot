import * as Actions from '../actionType';
import {data}  from '../../../app/main/containers/InstallerAgencies/agency.json'

const initialState = {
    state: false,
    agencyData: data
};

const installerAgency = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_AGENCIES:
            {
                return {
                    ...state,
                    state: true,
                    agencyData: { ...state.agencyData, ...action.payload }
                };
            }
        case Actions.ADD_AGENCY:
            {
                return {
                    ...state,
                    state: false
                };
            }
        case Actions.EDIT_AGENCY:
            {
                return {
                    ...state,
                    state: false
                };
            }
        case Actions.DELETE_AGENCY:
            {
                return {
                    ...state,
                    state: false
                };
            }
        default:
            {
                return { ...state };
            }
    }
};

export default installerAgency;
