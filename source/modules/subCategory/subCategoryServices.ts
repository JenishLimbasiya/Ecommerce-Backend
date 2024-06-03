import { Request } from "express";
import httpStatus from "http-status";
import appError from "../../common/utils/appError";
import subCategoryModel from "../../models/subcategory";
import { subCategory } from "../../common/utils/typeAliases";
import message from "../../common/messages/message";

const addSubCategory = async (req: Request, body: subCategory) => {
  try {
    const subCategory = await subCategoryModel.findOne({
      name: body.name,
    });

    if (subCategory) {
      throw new appError(
        httpStatus.CONFLICT,
        message.errormessage.subCategoryExist
      );
    }

    console.log("665c63da1bcdfebb0ec0fadf", body);

    const createSubCategory = await subCategoryModel.create({
      categoryId: body.categoryId,
      name: body.name,
    });

    return createSubCategory;
  } catch (error: any) {
    throw new appError(error.status, error.message);
  }
};

export default { addSubCategory };
