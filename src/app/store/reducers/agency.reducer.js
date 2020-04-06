import * as Actions from 'app/store/actions/tariff.action';
import {data}  from '../../../app/main/containers/InstallerAgencies/agency.json'

const initialState = {
    state: false,
    agencyData: data
};

const installerAgency = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_TARIFF:
            {
                return {
                    ...state,
                    state: true,
                    agencyData: { ...state.agencyData, ...action.payload }
                };
            }
        case Actions.ADD_TARIFF:
            {
                return {
                    ...state,
                    state: false
                };
            }
        case Actions.EDIT_TARIFF:
            {
                return {
                    ...state,
                    state: false
                };
            }
        case Actions.DELETE_TARIFF:
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
