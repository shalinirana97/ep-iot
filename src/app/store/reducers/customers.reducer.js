import * as Actions from '../actionType';
import { data } from '../../../app/main/containers/InstallerAgencies/agency.json'

const initialState = {
    state: false,
    customerData: data
};

const customers = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_CUSTOMERS:
            {
                return {
                    ...state,
                    state: true,
                    customerData: { ...state.customerData, ...action.payload }
                };
            }
        case Actions.ADD_CUSTOMER:
            {
                return {
                    ...state,
                    state: false
                };
            }
        case Actions.EDIT_CUSTOMER:
            {
                return {
                    ...state,
                    state: false
                };
            }
        case Actions.DELETE_CUSTOMER:
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

export default customers;
