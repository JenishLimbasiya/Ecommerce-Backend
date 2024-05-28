import { Request, Response, NextFunction } from "express";
import { apiResponse } from "./typeAliases";

const methodNotAllowed = (
  req: Request,
  res: Response,
  next: NextFunction
): Response<apiResponse> => {
  const errorMessage = (req as any).t("errorMessages.invalidRequestMethod");
  return res.status(405).send({
    message: errorMessage,
  });
};

export default methodNotAllowed;
