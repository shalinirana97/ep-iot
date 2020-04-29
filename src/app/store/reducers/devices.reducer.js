import * as Actions from 'app/store/actions/devices.action';

const initialState = {
    state: false,
    devices_data: [{ postCode: '520103, 430122', peak: '07:00 - 10:00 AM', offPeak: '12:00 - 01:00 PM', schedule: '04:00 - 06:00 PM' },
    { postCode: '580104', peak: '07:00 - 10:00 AM', offPeak: '12:00 - 01:00 PM', schedule: '04:00 - 06:00 PM' },
    { postCode: '750108', peak: '07:00 - 10:00 AM', offPeak: '12:00 - 01:00 PM', schedule: '04:00 - 06:00 PM' }],
    options: {
        children: 'Hi'
    }
};

const devicesDetail = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_DEVICES:
            {
                return {
                    ...state,
                    state: true,
                    devices_data: { ...state.devices_data, ...action.payload }
                };
            }
        case Actions.ADD_DEVICE:
            {
                return {
                    ...state,
                    state: false
                };
            }
        case Actions.EDIT_DEVICE:
            {
                return {
                    ...state,
                    state: false
                };
            }
        case Actions.DELETE_DEVICE:
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

export default devicesDetail;
