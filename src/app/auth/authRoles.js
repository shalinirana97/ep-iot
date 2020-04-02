/**
 * Authorization Roles
 */
const authRoles = {
    superAdmin : ['super-admin'],
    admin: ['admin','super-admin'],
    user     : ['admin', 'staff', 'user'],
    onlyGuest: []
};

export default authRoles;
