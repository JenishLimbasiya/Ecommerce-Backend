import bcrypt from "bcrypt";
import { Request } from "express";
import httpStatus from "http-status";
import appError from "../../common/utils/appError";
import userModel from "../../models/userModel";
import { login, signup } from "../../common/utils/typeAliases";
import constant from "../../common/config/constant";
import message from "../../common/messages/message";

const signup = async (req: Request, body: signup) => {
  try {
    const cheakUser = await userModel.findOne({
      email: body.email,
    });

    if (cheakUser) {
      throw new appError(httpStatus.NOT_FOUND, message.errormessage.userExist);
    }

    const hashedPassword = await bcrypt.hash(
      body.password,
      constant.saltRounds
    );

    const createUser = await userModel.create({
      fullName: body.fullName,
      password: hashedPassword,
      phone: body.phone,
      email: body.email?.toLocaleLowerCase(),
    });

    return createUser;
  } catch (error: any) {
    throw new appError(error.status, error.message);
  }
};

const login = async (req: Request, body: login) => {
  try {
    const userData = await userModel.findOne({
      email: body.email,
      status: { $ne: constant.STATUS.DELETE || constant.STATUS.INACTIVE },
    });

    if (!userData) {
      throw new appError(
        httpStatus.NOT_FOUND,
        message.errormessage.userIdNotFound
      );
    }

    const isPasswordMatch =
      userData.password &&
      (await bcrypt.compare(body.password, userData.password));

    if (!isPasswordMatch) {
      throw new appError(
        httpStatus.UNAUTHORIZED,
        message.errormessage.incorrectPassword
      );
    }
    return userData;
  } catch (error: any) {
    throw new appError(error.status, error.message);
  }
};

export default {
  signup,
  login,
};
