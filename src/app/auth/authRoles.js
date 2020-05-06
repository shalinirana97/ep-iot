/**
 * Authorization Roles
 */
const authRoles = {
    superAdmin : ['super-admin'],
    admin: ['admin'],
    user     : ['admin', 'staff', 'user'],
    onlyGuest: []
};

export default authRoles;
