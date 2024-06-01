import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import createResponse from "../../common/utils/response";
import authServices from "./authServices";
import message from "../../common/messages/message";
import tokenService from "../../common/services/tokenService";

const signup = async (req: Request, res: Response) => {
  try {
    const user = await authServices.signup(req, req.body);

    createResponse(res, httpStatus.OK, message.success.signup);
  } catch (error: any) {
    createResponse(res, error.status, error.message);
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const userLogin = await authServices.login(req, req.body);

    const userIdAsString = userLogin._id.toString();

    const tokens = await tokenService.generateAuthTokens(
      userIdAsString,
      userLogin.role
    );

    const response = {
      userId: userIdAsString,
      accessToken: tokens.accessToken.token,
      refreshToken: tokens.refreshToken.token,
    };

    createResponse(res, httpStatus.OK, message.success.login, response);
  } catch (error: any) {
    createResponse(res, error.status, error.message);
  }
};

export default {
  signup,
  login,
};
