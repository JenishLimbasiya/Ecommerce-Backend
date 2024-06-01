import Joi from "joi";

export interface appError {
  status: number;
  isOperational?: boolean;
  message: string;
  stack?: string;
}

export interface apiResponse {
  messsge: string;
  data: Array<object> | object;
}

export interface requestSchema {
  params?: Joi.ObjectSchema;
  query?: Joi.ObjectSchema;
  body?: Joi.ObjectSchema;
}
declare module "express" {
  export interface Request {
    user?: any; // Add this line to define the user property on Request
  }
}
export interface signup {
  fullName?: string;
  email?: string;
  password: string;
  phone?: string;
  googleid?: string;
}
export interface login {
  email: string;
  password: string;
}
export interface forgotPassword {
  email: string;
}
export interface verifyToken {
  token: string;
}
