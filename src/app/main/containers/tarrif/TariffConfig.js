import { authRoles } from 'app/auth'
import TariffList from './TariffList';

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
