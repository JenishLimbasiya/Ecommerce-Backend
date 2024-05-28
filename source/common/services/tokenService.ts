import moment from "moment";
import jwt from "jsonwebtoken";
import config from "./../config/config";
import appError from "../utils/appError";
import httpStatus from "http-status";
import { Request } from "express";

const generateToken = (
  user: any,
  role: any,
  expires: { unix: () => any },
  secret = config.jwt.secret
) => {
  const payload = {
    sub: { user, role },
    iat: moment().unix(),
    exp: expires.unix(),
  };
  return jwt.sign(payload, secret);
};

const generateAuthTokens = async (userId: string, role: string) => {
  const accessTokenExpires = moment().add(
    config.jwt.accessExpirationMinutes,
    "days"
  );
  const accessToken = generateToken(userId, role, accessTokenExpires);
  const refreshTokenExpires = moment().add(
    config.jwt.refreshExpirationDays,
    "days"
  );
  const refreshToken = generateToken(userId, role, refreshTokenExpires);
  return {
    accessToken: {
      token: accessToken,
    },
    refreshToken: {
      token: refreshToken,
    },
  };
};

const verifyToken = async (token: string, req: Request) => {
  const payload: any = await jwt.verify(token, config.jwt.secret);
  // const payload: any = await jwt.verify(mytoken, secretKey);

  // const tokenDoc: any = await tokens.findOne({ token, type, user: payload.sub.user._id });
  if (!payload) {
    throw new appError(
      httpStatus.NOT_FOUND,
      (req as any).t("errorMessages.linkExpired")
    );
  }
  return payload;
};

export default {
  generateAuthTokens,
  generateToken,
  verifyToken,
};
