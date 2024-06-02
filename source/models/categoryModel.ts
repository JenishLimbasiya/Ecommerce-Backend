import mongoose from "mongoose";
import constant from "../common/config/constant";

const categorySchema = new mongoose.Schema(
  {
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

const categoryModel = mongoose.model("category", categorySchema);

export default categoryModel;
