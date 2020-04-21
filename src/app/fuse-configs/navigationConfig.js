import { authRoles } from 'app/auth/index'

const navigationConfig = [
    {
        'id'      : 'applications',
        'title'   : 'Applications',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id': 'A1',
                'title': 'Devices',
                'type': 'item',
                'auth': authRoles.admin,
                'icon': 'devices',
                'url': '/devices'
            },
            {
                'id': 'A2',
                'title': 'Customers',
                'type': 'item',
                'auth': authRoles.superAdmin,
                'icon': 'people',
                'url': '/customers'
            },
            {
                'id': 'A3',
                'title': 'Installer Agencies',
                'type': 'item',
                'auth': authRoles.admin,
                'icon': 'settings',
                'url': '/installer-agencies'
            },  
            {
                'id': 'A4',
                'title': 'Tariffs',
                'type': 'item',
                'auth': authRoles.admin,
                'icon': 'monetization_on',
                'url': '/tariff'
            },
            {
                'id': 'A5',
                'title': 'Promotions',
                'type': 'item',
                'auth': authRoles.admin,
                'icon': 'speaker',
                'url': '/promotions/notifications'
            }
        ]
    }
];

export default navigationConfig;
