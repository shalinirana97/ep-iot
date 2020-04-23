import { authRoles } from 'app/auth'
import MainCreateNotification from './CreateNotification/indexCreateNotification';
import SentNotificationsList from './SentNotifications/indexSentNotifications';

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
        },
        {
            exact: true,
            path: '/promotions/notifications',
            component: SentNotificationsList
        },
        {
            exact: true,
            path: '/promotion/notification-details/:id',
            component: MainCreateNotification
        }
    ]
};
