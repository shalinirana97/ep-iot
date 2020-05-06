import { authRoles } from 'app/auth'
import InstallationAgentsList from './installationAgents/index';
import AgentDetails from './createAgents/index';

export const InstallerAgentsConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    auth: authRoles.admin,
    routes: [
        {
            path: '/installation-agents',
            exact: true,
            component: InstallationAgentsList
        },
        {
            path: '/installation-agent/create',
            exact: true,
            component: AgentDetails
        },
        {
            path: '/installation-agent/details/:id',
            exact: true,
            component: AgentDetails
        }
    ]
};
