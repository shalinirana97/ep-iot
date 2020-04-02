import {authRoles} from 'app/auth'
import DevicesList from './Devices';

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
            component: DevicesList
        }
    ]
};
