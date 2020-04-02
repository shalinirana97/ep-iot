import * as Actions from 'app/store/actions/tariff.action';

const initialState = {
    state: false,
    tariff_data: [{ postCode: '520103, 430122', peak: '07:00 - 10:00 AM', offPeak: '12:00 - 01:00 PM', schedule: '04:00 - 06:00 PM' },
    { postCode: '580104', peak: '07:00 - 10:00 AM', offPeak: '12:00 - 01:00 PM', schedule: '04:00 - 06:00 PM' },
    { postCode: '750108', peak: '07:00 - 10:00 AM', offPeak: '12:00 - 01:00 PM', schedule: '04:00 - 06:00 PM' }],
    options: {
        children: 'Hi'
    }
};

const tariffDetail = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_TARIFF:
            {
                return {
                    ...state,
                    state: true,
                    tariff_data: { ...state.tariff_data, ...action.payload }
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
                return {...state};
            }
    }
};

export default tariffDetail;
