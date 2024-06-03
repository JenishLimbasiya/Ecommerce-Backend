import Joi from "joi";

const addSubCategory = {
  body: Joi.object().keys({
    name: Joi.string().required().label("name"),
    categoryId: Joi.string().required().label("categoryId"),
  }),
};

export default { addSubCategory };
