import {authRoles} from 'app/auth'
import DevicesList from './Devices';
import MainDeviceDetails from './DeviceDetail/index';

export const DeviceListConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    auth: authRoles.superAdmin,
    routes: [
        {
            path: '/devices',
            exact: true,
            component: DevicesList
        },
        {
            path: '/device/details',
            exact: true,
            component: MainDeviceDetails
        }
    ]
};
