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

export default {
  addSubCategory,
};
