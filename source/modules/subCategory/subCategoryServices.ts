import { Request } from "express";
import httpStatus from "http-status";
import appError from "../../common/utils/appError";
import subCategoryModel from "../../models/subCategoryModel";
import {
  addSubCategory,
  editSubCategory,
} from "../../common/utils/typeAliases";
import message from "../../common/messages/message";
import constant from "../../common/config/constant";

const addSubCategory = async (req: Request, body: addSubCategory) => {
  try {
    const checkSubCategory = await subCategoryModel.findOne({
      name: body.name,
    });

    if (checkSubCategory) {
      throw new appError(
        httpStatus.CONFLICT,
        message.errormessage.subCategoryExist
      );
    }

    const createSubCategory = await subCategoryModel.create({
      categoryId: body.categoryId,
      name: body.name,
    });

    return createSubCategory;
  } catch (error: any) {
    throw new appError(error.status, error.message);
  }
};

const editSubCategory = async (req: Request, body: editSubCategory) => {
  try {
    const checkSubCategory = await subCategoryModel.findOne({
      name: body.name,
      _id: { $ne: body.id },
      status: { $ne: constant.STATUS.DELETE },
    });

    if (checkSubCategory) {
      throw new appError(
        httpStatus.CONFLICT,
        message.errormessage.subCategoryExist
      );
    }

    const updateSubCategory = await subCategoryModel.findByIdAndUpdate(
      body.id,
      { new: body.name },
      { new: true }
    );

    return updateSubCategory;
  } catch (error: any) {
    throw new appError(error.status, error.message);
  }
};

const subCategoryList = async () => {
  try {
    const listSubCategory = await subCategoryModel.find({});

    return listSubCategory;
  } catch (error: any) {
    throw new appError(error.status, error.message);
  }
};

const deleteSubCategory = async (req: Request, id: string) => {
  try {
    const existingSubCategory = await subCategoryModel.findById(id);

    if (!existingSubCategory) {
      throw new appError(
        httpStatus.NOT_FOUND,
        message.errormessage.subCategoryNotFound
      );
    } else if (existingSubCategory.status === constant.STATUS.DELETE) {
      throw new appError(
        httpStatus.CONFLICT,
        message.errormessage.subCategoryAlredyDelete
      );
    } else {
      return await subCategoryModel.findByIdAndUpdate(
        id,
        { status: constant.STATUS.DELETE },
        { new: true }
      );
    }
  } catch (error: any) {
    throw new appError(error.status, error.message);
  }
};

export default {
  addSubCategory,
  editSubCategory,
  subCategoryList,
  deleteSubCategory,
};
