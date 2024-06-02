import Joi from "joi";

const addCategory = {
  body: Joi.object().keys({
    name: Joi.string().required().label("name"),
  }),
};

const editCategory = {
  body: Joi.object().keys({
    id: Joi.string().required().label("id"),
    name: Joi.string().required().label("name"),
  }),
};

export default {
  addCategory,
  editCategory,
};
