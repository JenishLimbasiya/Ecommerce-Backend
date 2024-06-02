import { Request, Response } from "express";
import httpStatus from "http-status";
import createResponse from "../../common/utils/response";
import message from "../../common/messages/message";
import categoryServices from "./categoryServices";

const addCategory = async (req: Request, res: Response) => {
  try {
    const createCategory = await categoryServices.addCategory(req, req.body);

    createResponse(res, httpStatus.OK, message.success.addCategory);
  } catch (error: any) {
    createResponse(res, error.status, error.message);
  }
};

const editCategory = async (req: Request, res: Response) => {
  try {
    const categoryUpdate = await categoryServices.editCategory(req, req.body);

    createResponse(res, httpStatus.OK, message.success.editCategory);
  } catch (error: any) {
    createResponse(res, error.status, error.message);
  }
};

const categoryList = async (req: Request, res: Response) => {
  try {
    const listCategory = await categoryServices.categoryList();

    createResponse(
      res,
      httpStatus.OK,
      message.success.categoryList,
      listCategory
    );
  } catch (error: any) {
    createResponse(res, error.status, error.message);
  }
};

const deleteCategory = async (req: Request, res: Response) => {
  try {
    const deleteCategory = await categoryServices.deleteCategory(
      req,
      req.params.id
    );
    createResponse(res, httpStatus.OK, message.success.categoryDelete);
  } catch (error: any) {
    createResponse(res, error.status, error.message);
  }
};

export default {
  addCategory,
  editCategory,
  categoryList,
  deleteCategory,
};
