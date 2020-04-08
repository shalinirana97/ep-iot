import {authRoles} from 'app/auth'
import InstallerAgencyList from './index';
import InstallerAgencyDetail from './AgencyDetail/detailIndex';
// import MainDeviceDetails from './DeviceDetail/index';

export const InstallerAgencyConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    auth: authRoles.superAdmin,
    routes: [
        {
            path: '/installer-agencies',
            exact: true,
            component: InstallerAgencyList
        },
        {
            path: '/installer-agency/details',
            exact: true,
            component: InstallerAgencyDetail
        }
    ]
};
