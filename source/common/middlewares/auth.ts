import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import createResponse from "./../utils/response";
import { roleRights } from "../config/roles";
import appError from "../utils/appError";
import userModel from "../../models/userModel";
import constant from "../../common/config/constant";
import message from "../messages/message";

const auth =
  (routeMethod: string) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const secretKey: any = process.env.JWT_SECRET;
      const token: any = req.header("Authorization");

      if (!token) {
        throw new appError(
          httpStatus.UNAUTHORIZED,
          message.errormessage.needAuthentication
        );
      } else {
        const decoded = jwt.verify(token, secretKey);
        const userData: any = decoded.sub;
        if (routeMethod) {
          let converarray = [routeMethod];
          const userRights = roleRights.get(userData.role);

          const hasRequiredRights = converarray.every((requiredRight) =>
            userRights.includes(requiredRight)
          );

          if (!hasRequiredRights) {
            throw new appError(
              httpStatus.FORBIDDEN,
              message.errormessage.authenticationFailed
            );
          }
        }

        req.user = decoded.sub;
        let id: any = userData.user;
        const findUser: any = await userModel.findById(id);
        (req as any)["user"] = userData;
        if (!findUser) {
          throw new appError(
            httpStatus.NOT_FOUND,
            message.errormessage.userIdNotFound
          );
        }
        if (findUser.status === constant.STATUS.INACTIVE) {
          throw new appError(
            httpStatus.FORBIDDEN,
            message.errormessage.accountInactive
          );
        }
        if (findUser.status === constant.STATUS.DELETE) {
          throw new appError(
            httpStatus.GONE,
            message.errormessage.accountDeleted
          );
        }
        next();
      }
    } catch (err: any) {
      if (err.message === "jwt expired") {
        createResponse(
          res,
          httpStatus.UNAUTHORIZED,
          message.errormessage.tokenExpire
        );
      } else if (err.message === "invalid signature") {
        createResponse(
          res,
          httpStatus.UNAUTHORIZED,
          message.errormessage.invalidAccessToken
        );
      } else {
        createResponse(res, err.status, err.message);
      }
    }
  };

export default auth;
