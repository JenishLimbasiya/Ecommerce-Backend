import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import createResponse from "../../common/utils/response";
import authServices from "./authServices";
import message from "../../common/messages/message";

const signup = async (req: Request, res: Response) => {
  try {
    const user = await authServices.signup(req, req.body);

    createResponse(res, httpStatus.OK, message.success.signup);
  } catch (error: any) {
    createResponse(res, error.status, error.message);
  }
};

export default {
  signup,
};
