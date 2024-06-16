import { Request, Response } from "express";
import httpStatus from "http-status";
import createResponse from "../../common/utils/response";
import message from "../../common/messages/message";
import innerCategoryServices from "./innerCategoryServices";

const addInnerCategory = async (req: Request, res: Response) => {
  try {
    const innerCategory = await innerCategoryServices.addInnerCategory(
      req,
      req.body
    );

    createResponse(res, httpStatus.OK, message.success.addCategory);
  } catch (error: any) {
    createResponse(res, error.status, error.message);
  }
};

const editInnerCategory = async (req: Request, res: Response) => {
  try {
    const categoryUpdate = await innerCategoryServices.editInnerCategory(
      req,
      req.body
    );

    createResponse(res, httpStatus.OK, message.success.editCategory);
  } catch (error: any) {
    createResponse(res, error.status, error.message);
  }
};

const innerCategoryList = async (req: Request, res: Response) => {
  try {
    const listCategory = await innerCategoryServices.innerCategoryList();

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

const deleteInnerCategory = async (req: Request, res: Response) => {
  try {
    const deleteCategory = await innerCategoryServices.deleteInnerCategory(
      req,
      req.params.id
    );
    createResponse(res, httpStatus.OK, message.success.categoryDelete);
  } catch (error: any) {
    createResponse(res, error.status, error.message);
  }
};

export default {
  addInnerCategory,
  editInnerCategory,
  innerCategoryList,
  deleteInnerCategory,
};
