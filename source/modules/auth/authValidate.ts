import Joi from "joi";

const signup = {
  body: Joi.object().keys({
    fullName: Joi.string().required().label("name"),
    email: Joi.string().email().label("email"),
    phone: Joi.string().label("phone"),
    password: Joi.string().required().label("password"),
    googleid: Joi.string().label("googleid"),
  }),
};

const login = {
  body: Joi.object().keys({
    email: Joi.string().email().label("email"),
    password: Joi.string().required().label("password"),
    googleid: Joi.string().label("googleid"),
  }),
};

const forgotPassword = {
  body: Joi.object().keys({
    email: Joi.string().email().required().label("email"),
  }),
};

const verifyToken = {
  body: Joi.object().keys({
    token: Joi.string().required().label("token"),
  }),
};

const changePassword = {
  body: Joi.object().keys({
    oldPassword: Joi.string().required().label("oldPassword"),
    newPassword: Joi.string().required().label("newPassword"),
  }),
};

export default {
  signup,
  login,
  forgotPassword,
  verifyToken,
  changePassword,
};
