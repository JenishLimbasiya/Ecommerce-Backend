import constant from "./constant";
const roles = [constant.ROLES.ADMIN, constant.ROLES.USER];
const roleRights = new Map();

roleRights.set(roles[0], ["addbox"]);

export { roles, roleRights };
