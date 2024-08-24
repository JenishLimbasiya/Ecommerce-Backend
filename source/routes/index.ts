import express from "express";
import authRoutes from "../modules/auth/authRoutes";
import categoryRoutes from "../modules/category/categoryRoutes";
import subCategoryRoutes from "../modules/subCategory/subCategoryRoutes";
import innerCategoryRoutes from "../modules/innerCategory/innerCategoryRoutes";
import productRoutes from "../modules/product/productRoutes";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/category", categoryRoutes);
router.use("/subCategory", subCategoryRoutes);
router.use("/innerSubCategory", innerCategoryRoutes);
router.use("/product", productRoutes);

export default router;
