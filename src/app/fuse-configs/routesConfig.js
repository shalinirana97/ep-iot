import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse';
import { CustomerConfig } from 'app/main/containers/customers/CustomerConfig';
import {DeviceListConfig} from 'app/main/containers/Devices/DeviceListConfig';
import {TariffConfig} from 'app/main/containers/tarrif/TariffConfig';
import {LoginConfig} from 'app/main/containers/login/LoginConfig';
import { InstallerAgencyConfig} from 'app/main/containers/InstallerAgencies/InstallerConfig';
import { PromotionsConfig } from 'app/main/containers/promotions/PromotionsConfig';
import { InstallerAgentsConfig} from 'app/main/containers/AgencyLogin/AgencyConfig'

const routeConfigs = [
    CustomerConfig,
    DeviceListConfig,
    TariffConfig,
    LoginConfig,
    InstallerAgencyConfig,
    PromotionsConfig,
    InstallerAgentsConfig
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/login" />
    },
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/devices" />
    },
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/device/details" />
    },
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/customers" />
    },
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/customer/details" />
    },
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/installer-agencies" />
    },
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/installer-agency/create" />
    },
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/installer-agency/detail/:id" />
    },
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/tariff" />
    },
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/promotions/notifications" />
    },
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/promotion/create-notification" />
    },
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/promotion/notification-details/:id" />
    },

    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/installation-agents" />
    },
];

export default routes;
