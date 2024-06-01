const success = {
  signup: "signup successfully",
};

const validate = {
  name: "name is required!",
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
};

export default {
  success,
  validate,
  errormessage,
};
