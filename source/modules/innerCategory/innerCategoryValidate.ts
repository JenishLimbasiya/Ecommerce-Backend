import Joi from "joi";

const addInnerCategory = {
  body: Joi.object().keys({
    name: Joi.string().required().label("name"),
    subCategoryId: Joi.string().required().label("subCategoryId"),
  }),
};

const editInnerCategory = {
  body: Joi.object().keys({
    id: Joi.string().required().label("id"),
    name: Joi.string().required().label("name"),
  }),
};

export default {
  addInnerCategory,
  editInnerCategory,
};
