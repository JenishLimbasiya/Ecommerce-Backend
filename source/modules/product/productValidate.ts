import Joi from "joi";

const addProduct = {
  body: Joi.object().keys({
    name: Joi.string().required().label("name"),
    description: Joi.string().required().label("description"),
    price: Joi.number().required().label("price"),
    disprice: Joi.number().required().label("disprice"),
    // productImage: Joi.array()
    //   .items(Joi.string())
    //   .min(1)
    //   .required()
    //   .label("Product Image"),
    quantity: Joi.number().required().label("quantity"),
    productValue: Joi.string().required().label("productValue"),
    innerCategoryId: Joi.string().required().label("innerCategoryId"),
    subCategoryId: Joi.string().required().label("subCategoryId"),
  }),
};

const editProduct = {
  body: Joi.object().keys({
    name: Joi.string().required().label("name"),
    description: Joi.string().required().label("description"),
    price: Joi.number().required().label("price"),
    disprice: Joi.number().required().label("disprice"),
    productImage: Joi.array().allow(null).required().label("description"),
    quantity: Joi.number().required().label("quantity"),
    productValue: Joi.string().required().label("productValue"),
  }),
};

export default {
  addProduct,
  editProduct,
};
