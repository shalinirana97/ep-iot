import * as Actions from 'app/store/actions/tariff.action';

const initialState = {
    state: false,
    tariff_data: [{
        id: 1, direction: 'desc', postCode: '520103', timing: 'Flat',
        weekday: {
            peakTime: [{ startTime: '07:00', endTime: '10:00' }],
            offTime: [{ startTime: '11:00', endTime: '01:00' }],
            shoulderTime: [{ startTime: '04:00', endTime: '06:00' }]
        },
        weekends: {
            peakTime: [{ startTime: '09:00', endTime: '10:00' }],
            offTime: [{ startTime: '12:00', endTime: '02:00' }],
            shoulderTime: [{ startTime: '05:00', endTime: '07:00' }]
        }
    },
    {
        id: 2, direction: 'desc', postCode: '320104', timing:'Variable',
        weekday: {
            peakTime: [{ startTime: '07:00', endTime: '10:00' }],
            offTime: [{ startTime: '11:00', endTime: '01:00' }],
            shoulderTime: [{ startTime: '04:00', endTime: '06:00' }]
        },
        weekends: {
            peakTime: [{ startTime: '09:00', endTime: '10:00' }],
            offTime: [{ startTime: '12:00', endTime: '02:00' }],
            shoulderTime: [{ startTime: '05:00', endTime: '07:00' }]
        }
    },
    {
        id: 3, direction: 'desc', postCode: '750108', timing: 'Flat',
        weekday: {
            peakTime: [{ startTime: '07:00', endTime: '10:00' }],
            offTime: [{ startTime: '11:00', endTime: '01:00' }],
            shoulderTime: [{ startTime: '04:00', endTime: '06:00' }]
        },
        weekends: {
            peakTime: [{ startTime: '09:00', endTime: '10:00' }],
            offTime: [{ startTime: '12:00', endTime: '02:00' }],
            shoulderTime: [{ startTime: '05:00', endTime: '07:00' }]
        }
    }],
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
                return { ...state };
            }
    }
};

export default tariffDetail;
