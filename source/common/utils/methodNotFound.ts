import { Request, Response, NextFunction } from "express";
import { apiResponse } from "./typeAliases";
import message from "../messages/message";

const methodNotAllowed = (
  req: Request,
  res: Response,
  next: NextFunction
): Response<apiResponse> => {
  const errorMessage = message.errormessage.invalidRequestMethod;
  return res.status(405).send({
    message: errorMessage,
  });
};

export default methodNotAllowed;
