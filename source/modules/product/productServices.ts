import { Request } from "express";
import httpStatus from "http-status";
import appError from "../../common/utils/appError";
import { addProduct, editProduct } from "../../common/utils/typeAliases";
import message from "../../common/messages/message";
import productModel from "../../models/productModel";
import constant from "../../common/config/constant";

const addProduct = async (req: Request, body: addProduct) => {
  try {
    const product = await productModel.create(body);

    return product;
  } catch (error: any) {
    throw new appError(error.status, error.message);
  }
};

const updateProduct = async (req: Request, id: string, body: editProduct) => {
  try {
    const product = await productModel.findById(id);

    if (!product) {
      throw new appError(httpStatus.CONFLICT, message.errormessage.productNot);
    }

    const editProduct = await productModel.findByIdAndUpdate(
      id,
      {
        name: body.name,
        description: body.description,
        price: body.price,
        disprice: body.disprice,
        productImage: body.productImage,
        quantity: body.quantity,
        productValue: body.productValue,
      },
      { new: true }
    );

    return editProduct;
  } catch (error: any) {
    throw new appError(error.status, error.message);
  }
};

const productList = async () => {
  try {
    const listProduct = await productModel.find({});

    return listProduct;
  } catch (error: any) {
    throw new appError(error.status, error.message);
  }
};

const deleteProduct = async (req: Request, id: string) => {
  const existingProduct = await productModel.findById(id);

  if (!existingProduct) {
    throw new appError(httpStatus.NOT_FOUND, message.errormessage.productNot);
  } else if (existingProduct.status === constant.STATUS.DELETE) {
    throw new appError(
      httpStatus.CONFLICT,
      message.errormessage.productAlredyDelete
    );
  } else {
    return await productModel.findByIdAndUpdate(
      id,
      { status: constant.STATUS.DELETE },
      { new: true }
    );
  }
};

export default {
  addProduct,
  updateProduct,
  productList,
  deleteProduct,
};
