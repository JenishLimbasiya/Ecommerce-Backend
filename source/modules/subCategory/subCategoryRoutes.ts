import express from "express";
import validate from "../../common/middlewares/validate";
import subCategoryValidate from "./subCategoryValidate";
import subCategoryController from "./subCategoryController";
import methodNotAllowed from "../../common/utils/methodNotFound";
import auth from "../../common/middlewares/auth";

const router = express.Router();

router
  .route("/add")
  .post(
    auth("add"),
    validate(subCategoryValidate.addSubCategory),
    subCategoryController.addSubCategory
  )
  .all(methodNotAllowed);

router
  .route("/edit")
  .patch(
    auth("categoryList"),
    validate(subCategoryValidate.editSubCategory),
    subCategoryController.editSubCategory
  )
  .all(methodNotAllowed);

router
  .route("/list")
  .get(auth("categoryList"), subCategoryController.subCategoryList)
  .all(methodNotAllowed);

router
  .route("/delete")
  .patch(auth("categoryList"), subCategoryController.deleteSubCategory)
  .all(methodNotAllowed);

export default router;
