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

export default {
  signup,
  login,
};
