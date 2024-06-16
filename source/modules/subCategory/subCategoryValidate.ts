import Joi from "joi";

const addSubCategory = {
  body: Joi.object().keys({
    name: Joi.string().required().label("name"),
    categoryId: Joi.string().required().label("categoryId"),
  }),
};

const editSubCategory = {
  body: Joi.object().keys({
    id: Joi.string().required().label("id"),
    name: Joi.string().required().label("name"),
  }),
};

export default { addSubCategory, editSubCategory };
