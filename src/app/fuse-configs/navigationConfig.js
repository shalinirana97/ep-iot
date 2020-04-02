import { authRoles } from 'app/auth/index'

const navigationConfig = [
    {
        'id'      : 'applications',
        'title'   : 'Applications',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'A1',
                'title': 'Users',
                'type': 'item',
                'auth': authRoles.superAdmin,
                'icon' : 'people',
                'url'  : '/users'
            }, {
                'id': 'A2',
                'title': 'Installed Devices',
                'type': 'item',
                'auth': authRoles.admin,
                'icon': 'devices',
                'url': '/installedDevices'
            }, {
                'id': 'A3',
                'title': 'Tariff',
                'type': 'item',
                'auth': authRoles.admin,
                'icon': 'monetization_on',
                'url': '/tariff'
            }
        ]
    }
];

export default navigationConfig;
