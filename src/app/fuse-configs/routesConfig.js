import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse';
import { UserConfig } from 'app/main/containers/users/UserConfig';
import {DeviceListConfig} from 'app/main/containers/Devices/DeviceListConfig';
import {TariffConfig} from 'app/main/containers/tarrif/TariffConfig';
import {LoginConfig} from 'app/main/containers/login/LoginConfig';
import { InstallerAgencyConfig} from 'app/main/containers/InstallerAgencies/InstallerConfig';

const routeConfigs = [
    UserConfig,
    DeviceListConfig,
    TariffConfig,
    LoginConfig,
    InstallerAgencyConfig
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
        component: () => <Redirect to="/customers"/>
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
        component: () => <Redirect to="/installer-agencies" />
    },
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/tariff" />
    }
];

export default routes;
