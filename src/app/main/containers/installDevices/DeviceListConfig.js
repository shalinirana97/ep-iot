import {authRoles} from 'app/auth'
import InstalledDevicesList from './InstalledDevices';

export const DeviceListConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    auth: authRoles.superAdmin,
    routes: [
        {
            path: '/installedDevices',
            component: InstalledDevicesList
        }
    ]
};
