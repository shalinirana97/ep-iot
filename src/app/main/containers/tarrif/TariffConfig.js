import { authRoles } from 'app/auth'
import TariffList from './index.js';

export const TariffConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes: [
        {
            path: '/tariff',
            component: TariffList
        }
    ]
};
