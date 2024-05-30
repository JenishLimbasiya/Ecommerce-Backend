import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import createResponse from "../../common/utils/response";
import authServices from "./authServices";

const signup = async (req: Request, res: Response) => {
  try {
    const user = await authServices.signup(req, req.body);

    createResponse(
      res,
      httpStatus.OK,
      (req as any).t("successMessages.LoggedIn")
    );
  } catch (error: any) {
    createResponse(res, error.status, error.message);
  }
};

export default {
  signup,
};
