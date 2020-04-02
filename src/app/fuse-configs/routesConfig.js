import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse';
import { UserConfig } from 'app/main/containers/users/UserConfig';
import {DeviceListConfig} from 'app/main/containers/installDevices/DeviceListConfig';
import {TariffConfig} from 'app/main/containers/tarrif/TariffConfig';
import {LoginConfig} from 'app/main/containers/login/LoginConfig';

const routeConfigs = [
    UserConfig,
    DeviceListConfig,
    TariffConfig,
    LoginConfig
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/login" />
    },
    {
        path     : '/',
        component: () => <Redirect to="/users"/>
    },
    {
        path: '/',
        component: () => <Redirect to="/installedDevices" />
    },
    {
        path: '/',
        component: () => <Redirect to="/tariff" />
    }
];

export default routes;
