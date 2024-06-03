const success = {
  signup: "signup successfully",
  login: "Login successfully!",
  forgotPassword: "Forgot Password Email Sent Successfully!",
  tokenVerified: "Token verify Successfully!",
  passwordChange: "Password reset successful! New password has been update",
  addSubCategory: "Add sub category successfully",
};

const validate = {
  name: "name is required!",
  email: "email is required!",
  token: "token is required!",
  password: "password is required",
  categoryId: "category id is required",
};

const errormessage = {
  needAuthentication: "Please Authenticate",
  authenticationFailed: "You are not allowed to perform this action.",
  userIdNotFound: "User Not Found",
  accountInactive:
    "Your account is disabled. Please contact your administrator.",

  accountDeleted: "Your account is deleted. Please contact your administrator.",
  tokenExpire: "Access Token is Expired. Please Authenticate Again.",
  invalidAccessToken: "Access Token is invalid.",
  userExist: "user is alredy exists",
  incorrectPassword: "Incorrect password entered.",
  userNotExist: "user not exists",
  invalidToken: "Invalid Token",
  oldPassword: "old password is incorrect",
  subCategoryExist: "sub category is alredy exists",
};

export default {
  success,
  validate,
  errormessage,
};
