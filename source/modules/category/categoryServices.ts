import { Request } from "express";
import httpStatus from "http-status";
import appError from "../../common/utils/appError";
import { addCategory, editCategory } from "../../common/utils/typeAliases";
import message from "../../common/messages/message";
import categoryModel from "../../models/categoryModel";
import constant from "../../common/config/constant";

const addCategory = async (req: Request, body: addCategory) => {
  try {
    const checkCategory = await categoryModel.findOne({
      name: body.name,
    });

    if (checkCategory) {
      throw new appError(
        httpStatus.CONFLICT,
        message.errormessage.categoryExist
      );
    }

    const createCategory = await categoryModel.create({
      name: body.name,
    });

    return createCategory;
  } catch (error: any) {
    throw new appError(error.status, error.message);
  }
};

const editCategory = async (req: Request, body: editCategory) => {
  try {
    const duplicateCategory = await categoryModel.findOne({
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

    const updateCategory = await categoryModel.findByIdAndUpdate(
      body.id,
      { name: body.name },
      { new: true }
    );

    return updateCategory;
  } catch (error: any) {
    throw new appError(error.status, error.message);
  }
};

const categoryList = async () => {
  try {
    const listCategory = await categoryModel.find({});

    return listCategory;
  } catch (error: any) {
    throw new appError(error.status, error.message);
  }
};

const deleteCategory = async (req: Request, id: string) => {
  const existingCategory = await categoryModel.findById(id);

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
    return await categoryModel.findByIdAndUpdate(
      id,
      { status: constant.STATUS.DELETE },
      { new: true }
    );
  }
};

export default {
  addCategory,
  editCategory,
  categoryList,
  deleteCategory,
};
