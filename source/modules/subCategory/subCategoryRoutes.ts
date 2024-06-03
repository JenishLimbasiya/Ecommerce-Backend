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
    validate(subCategoryValidate.addSubCategory),
    subCategoryController.addSubCategory
  )
  .all(methodNotAllowed);
export default router;
