import express from "express";
import validate from "../../common/middlewares/validate";
import authValidation from "./authValidate";
import authController from "./authController";
import methodNotAllowed from "../../common/utils/methodNotFound";

const router = express.Router();

router
  .route("/signup")
  .post(validate(authValidation.signup), authController.signup)
  .all(methodNotAllowed);

router
  .route("/login")
  .post(validate(authValidation.login), authController.login)
  .all(methodNotAllowed);

export default router;
