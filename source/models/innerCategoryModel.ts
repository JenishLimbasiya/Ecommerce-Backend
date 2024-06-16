import mongoose from "mongoose";
import constant from "../common/config/constant";

const innerCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    subCategoryId: {
      type: mongoose.Schema.Types.ObjectId,
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

const innerCategoryModel = mongoose.model("innercategory", innerCategorySchema);

export default innerCategoryModel;
