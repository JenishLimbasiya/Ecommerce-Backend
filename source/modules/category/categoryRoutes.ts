import express from "express";
import validate from "../../common/middlewares/validate";
import methodNotAllowed from "../../common/utils/methodNotFound";
import auth from "../../common/middlewares/auth";
import categoryValidate from "./categoryValidate";
import categoryController from "./categoryController";

const router = express.Router();

router
  .route("/addCategory")
  .post(
    auth("addCategory"),
    validate(categoryValidate.addCategory),
    categoryController.addCategory
  )
  .all(methodNotAllowed);

router
  .route("/editCategory")
  .patch(
    auth("editCategory"),
    validate(categoryValidate.editCategory),
    categoryController.editCategory
  )
  .all(methodNotAllowed);

router
  .route("/categoryList")
  .get(auth("categoryList"), categoryController.categoryList)
  .all(methodNotAllowed);

router
  .route("/deleteCategory/:id")
  .patch(auth("deleteCategory"), categoryController.deleteCategory)
  .all(methodNotAllowed);

export default router;
