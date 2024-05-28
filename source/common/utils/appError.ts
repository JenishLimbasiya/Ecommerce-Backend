import { appError } from "./typeAliases";

class AppError extends Error implements appError {
  status: number;
  isOperational: boolean;
  constructor(
    statusCode: number,
    message: string,
    isOperational = true,
    stack = ""
  ) {
    super(message);
    this.status = statusCode || 500;
    this.isOperational = isOperational;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default AppError;
