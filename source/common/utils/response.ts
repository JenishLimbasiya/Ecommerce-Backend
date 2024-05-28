import { Response } from "express";
import { apiResponse } from "./typeAliases";

const createResponse = (
  res: Response,
  status: number = 500,
  message: string = "internal server error",
  payload?: Array<object> | object
): Response<apiResponse> => {
  const response: any = {
    message: message,
  };

  if (payload !== undefined || payload != "" || !payload) {
    response.data = payload;
  }
  return res.status(status).json(response);
};

export default createResponse;
