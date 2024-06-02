import express from "express";
import validate from "../../common/middlewares/validate";
import authValidation from "./authValidate";
import authController from "./authController";
import methodNotAllowed from "../../common/utils/methodNotFound";
import auth from "../../common/middlewares/auth";

const router = express.Router();

router
  .route("/signup")
  .post(validate(authValidation.signup), authController.signup)
  .all(methodNotAllowed);

router
  .route("/login")
  .post(validate(authValidation.login), authController.login)
  .all(methodNotAllowed);

router
  .route("/forgotPassword")
  .post(validate(authValidation.forgotPassword), authController.forgotPassword)
  .all(methodNotAllowed);

router
  .route("/forgotPassword/verifyToken")
  .post(validate(authValidation.verifyToken), authController.verifyToken)
  .all(methodNotAllowed);

router
  .route("/changePassword")
  .patch(
    auth("changePassword"),
    validate(authValidation.changePassword),
    authController.changePassword
  );

export default router;
