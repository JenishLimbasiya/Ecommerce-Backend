import express from "express";
import validate from "../../common/middlewares/validate";
import subCategoryValidate from "./subCategoryValidate";
import subCategoryController from "./subCategoryController";
import methodNotAllowed from "../../common/utils/methodNotFound";
import auth from "../../common/middlewares/auth";

const router = express.Router();

router
  .route("/addSubCategory")
  .post(
    auth("addSubCategory"),
    validate(subCategoryValidate.addSubCategory),
    subCategoryController.addSubCategory
  )
  .all(methodNotAllowed);

router
  .route("/editSubCategory")
  .patch(
    auth("editSubCategory"),
    validate(subCategoryValidate.editSubCategory),
    subCategoryController.editSubCategory
  )
  .all(methodNotAllowed);

router
  .route("/subCategoryList")
  .get(auth("subCategoryList"), subCategoryController.subCategoryList)
  .all(methodNotAllowed);

router
  .route("/deleteSubCategory/:id")
  .patch(auth("deleteSubCategory"), subCategoryController.deleteSubCategory)
  .all(methodNotAllowed);

export default router;
