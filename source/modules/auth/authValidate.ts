import Joi from "joi";

const signup = {
  body: Joi.object().keys({
    name: Joi.string().required().label("name"),
    email: Joi.string().email().label("email"),
    phone: Joi.string().label("phone"),
    password: Joi.string().required().label("password"),
    googleid: Joi.string().label("googleid"),
  }),
};

export default {
  signup,
};
