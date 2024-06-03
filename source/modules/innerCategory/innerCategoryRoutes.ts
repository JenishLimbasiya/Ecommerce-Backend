import express from "express";
import validate from "../../common/middlewares/validate";
import methodNotAllowed from "../../common/utils/methodNotFound";
import auth from "../../common/middlewares/auth";
import innerCategoryValidate from "./innerCategoryValidate";
import innerCategoryController from "./innerCategoryController";

const router = express.Router();

router
  .route("/add")
  .post(
    auth("addInnerCategory"),
    validate(innerCategoryValidate.addInnerCategory),
    innerCategoryController.addInnerCategory
  )
  .all(methodNotAllowed);

router
  .route("/edit")
  .patch(
    auth("editInnerCategory"),
    validate(innerCategoryValidate.editInnerCategory),
    innerCategoryController.editInnerCategory
  )
  .all(methodNotAllowed);

router
  .route("/innerCategoryList")
  .get(auth("innerCategoryList"), innerCategoryController.innerCategoryList)
  .all(methodNotAllowed);

router
  .route("/innerCategoryDelete/:id")
  .patch(
    auth("innerCategoryDelete"),
    innerCategoryController.deleteInnerCategory
  )
  .all(methodNotAllowed);

export default router;
