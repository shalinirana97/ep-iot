import UserList from './UserList';

export const UserConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/users',
            component: UserList
        }
    ]
};

/**
 * Lazy load Example
 */
/*
import React from 'react';

export const ExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/example',
            component: React.lazy(() => import('./Example'))
        }
    ]
};
*/
