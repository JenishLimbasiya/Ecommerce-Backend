import Joi from "joi";
import { ObjectId } from "mongoose";

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
export interface changePassword {
  oldPassword: string;
  newPassword: string;
}
export interface addCategory {
  name: string;
}

export interface editCategory {
  id: ObjectId;
  name: string;
}
export interface addSubCategory {
  name: string;
  categoryId: ObjectId;
}
export interface editSubCategory {
  id: ObjectId;
  name: string;
}

export interface addInnerCategory {
  name: string;
  subCategoryId: ObjectId;
}
