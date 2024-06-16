import { Request } from "express";
import httpStatus from "http-status";
import appError from "../../common/utils/appError";
import { addInnerCategory, editCategory } from "../../common/utils/typeAliases";
import message from "../../common/messages/message";
import categoryModel from "../../models/categoryModel";
import constant from "../../common/config/constant";
import innerCategoryModel from "../../models/innerCategoryModel";

const addInnerCategory = async (req: Request, body: addInnerCategory) => {
  try {
    const ckeakCategory = await innerCategoryModel.findOne({
      name: body.name,
    });

    if (ckeakCategory) {
      throw new appError(
        httpStatus.CONFLICT,
        message.errormessage.categoryExist
      );
    }

    const createCategory = await innerCategoryModel.create({
      name: body.name,
      subCategoryId: body.subCategoryId,
    });

    return createCategory;
  } catch (error: any) {
    throw new appError(error.status, error.message);
  }
};

const editInnerCategory = async (req: Request, body: editCategory) => {
  try {
    const duplicateCategory = await innerCategoryModel.findOne({
      name: body.name,
      _id: { $ne: body.id },
      status: { $ne: constant.STATUS.DELETE },
    });

    if (duplicateCategory) {
      throw new appError(
        httpStatus.CONFLICT,
        message.errormessage.categoryExist
      );
    }

    const updateCategory = await innerCategoryModel.findByIdAndUpdate(
      body.id,
      { name: body.name },
      { new: true }
    );

    return updateCategory;
  } catch (error: any) {
    throw new appError(error.status, error.message);
  }
};

const innerCategoryList = async () => {
  try {
    const listCategory = await innerCategoryModel.find({});

    return listCategory;
  } catch (error: any) {
    throw new appError(error.status, error.message);
  }
};

const deleteInnerCategory = async (req: Request, id: string) => {
  const existingCategory = await innerCategoryModel.findById(id);

  if (!existingCategory) {
    throw new appError(
      httpStatus.NOT_FOUND,
      message.errormessage.categoryNotFound
    );
  } else if (existingCategory.status === constant.STATUS.DELETE) {
    throw new appError(
      httpStatus.CONFLICT,
      message.errormessage.categoryAlredyDelete
    );
  } else {
    return await innerCategoryModel.findByIdAndUpdate(
      id,
      { status: constant.STATUS.DELETE },
      { new: true }
    );
  }
};

export default {
  addInnerCategory,
  editInnerCategory,
  innerCategoryList,
  deleteInnerCategory,
};
