import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import createResponse from "../../common/utils/response";
import subCategoryServices from "./subCategoryServices";
import message from "../../common/messages/message";

const addSubCategory = async (req: Request, res: Response) => {
  try {
    await subCategoryServices.addSubCategory(req, req.body);

    createResponse(res, httpStatus.OK, message.success.addSubCategory);
  } catch (error: any) {
    createResponse(res, error.status, error.message);
  }
};

const editSubCategory = async (req: Request, res: Response) => {
  try {
    await subCategoryServices.editSubCategory(req, req.body);

    createResponse(res, httpStatus.OK, message.success.editSubCategory);
  } catch (error: any) {
    createResponse(res, error.status, error.message);
  }
};

const subCategoryList = async (req: Request, res: Response) => {
  try {
    const listSubCategory = await subCategoryServices.subCategoryList();

    createResponse(
      res,
      httpStatus.OK,
      message.success.subCategoryList,
      listSubCategory
    );
  } catch (error: any) {
    createResponse(res, error.status, error.message);
  }
};

const deleteSubCategory = async (req: Request, res: Response) => {
  try {
    const deleteCategory = await subCategoryServices.deleteSubCategory(
      req,
      req.params.id
    );
    createResponse(res, httpStatus.OK, message.success.subCategoryDelete);
  } catch (error: any) {
    createResponse(res, error.status, error.message);
  }
};

export default {
  addSubCategory,
  editSubCategory,
  subCategoryList,
  deleteSubCategory,
};
