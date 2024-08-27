import { Request, Response } from "express";
import httpStatus from "http-status";
import createResponse from "../../common/utils/response";
import message from "../../common/messages/message";
import productServices from "./productServices";

const addProduct = async (req: Request, res: Response) => {
  try {
    const { body, files } = req;
    const createProduct = await productServices.addProduct(req, body, files);

    createResponse(res, httpStatus.OK, message.success.addProduct);
  } catch (error: any) {
    createResponse(res, error.status, error.message);
  }
};

const editProduct = async (req: Request, res: Response) => {
  try {
    const product = await productServices.updateProduct(
      req,
      req.params.id,
      req.body
    );

    createResponse(res, httpStatus.OK, message.success.editProduct);
  } catch (error: any) {
    createResponse(res, error.status, error.message);
  }
};

const productList = async (req: Request, res: Response) => {
  try {
    const product = await productServices.productList();

    createResponse(res, httpStatus.OK, message.success.productList, product);
  } catch (error: any) {
    createResponse(res, error.status, error.message);
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product = await productServices.deleteProduct(req, req.params.id);

    createResponse(res, httpStatus.OK, message.success.productDelete);
  } catch (error: any) {
    createResponse(res, error.status, error.message);
  }
};

export default {
  addProduct,
  editProduct,
  productList,
  deleteProduct,
};
