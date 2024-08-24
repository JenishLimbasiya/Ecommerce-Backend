import constant from "./constant";
const roles = [constant.ROLES.ADMIN, constant.ROLES.USER];
const roleRights = new Map();

roleRights.set(roles[0], [
  "addCategory",
  "editCategory",
  "categoryList",
  "deleteCategory",
  "addSubCategory",
  "editSubCategory",
  "subCategoryList",
  "deleteSubCategory",
  "addInnerCategory",
  "editInnerCategory",
  "innerCategoryList",
  "innerCategoryDelete",
  "addProduct",
  "editProduct",
  "productList",
  "deleteProduct",
]);

roleRights.set(roles[1], ["changePassword"]);

export { roles, roleRights };
