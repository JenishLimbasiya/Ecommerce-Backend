import express from "express";
import validate from "../../common/middlewares/validate";
import methodNotAllowed from "../../common/utils/methodNotFound";
import auth from "../../common/middlewares/auth";
import productValidate from "./productValidate";
import productController from "./productController";
import { upload } from "../../common/middlewares/multer";
const router = express.Router();

router
  .route("/addProduct")
  .post(
    auth("addProduct"),
    upload.array("productImage"),
    validate(productValidate.addProduct),
    productController.addProduct
  )
  .all(methodNotAllowed);

router
  .route("/editProduct/:id")
  .patch(
    auth("editProduct"),
    validate(productValidate.editProduct),
    productController.editProduct
  )
  .all(methodNotAllowed);

router
  .route("/productList")
  .get(auth("productList"), productController.productList)
  .all(methodNotAllowed);

router
  .route("/deleteProduct/:id")
  .delete(auth("deleteProduct"), productController.deleteProduct)
  .all(methodNotAllowed);

export default router;
