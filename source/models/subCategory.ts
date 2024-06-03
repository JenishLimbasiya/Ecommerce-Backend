import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema(
  {
    categoryId: {
      Type: mongoose.Schema.Types.ObjectId,
      // ref: "category",
    },
    name: {
      Type: String,
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
