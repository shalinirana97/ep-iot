import CustomerList from './index';
import MainCustomerDetails from './CustomerDetail/customerDetailIndex'

export const CustomerConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path: '/customers',
            component: CustomerList
        },
        {
            path: '/customer/details/:id',
            exact: true,
            component: MainCustomerDetails
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
