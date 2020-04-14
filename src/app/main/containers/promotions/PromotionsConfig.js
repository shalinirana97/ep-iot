import { authRoles } from 'app/auth'
import MainCreateNotification from './CreateNotification/indexCreateNotification';

export const PromotionsConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes: [
        {
            exact: true,
            path: '/promotion/create-notification',
            component: MainCreateNotification
        }
    ]
};
