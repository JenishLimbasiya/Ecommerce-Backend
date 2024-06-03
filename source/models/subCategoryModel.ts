import mongoose from "mongoose";
import constant from "../common/config/constant";

const subCategorySchema = new mongoose.Schema(
  {
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },
    name: {
      type: String,
    },
    status: {
      type: String,
      enum: [
        constant.STATUS.ACTIVE,
        constant.STATUS.INACTIVE,
        constant.STATUS.DELETE,
      ],
      default: constant.STATUS.ACTIVE,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const subCategoryModel = mongoose.model("subcategory", subCategorySchema);

export default subCategoryModel;
