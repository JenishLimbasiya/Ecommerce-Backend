import express from "express";
import authRoutes from "../modules/auth/authRoutes";
import categoryRoutes from "../modules/category/categoryRoutes";
import subCategoryRoutes from "../modules/subCategory/subCategoryRoutes";
const router = express.Router();

router.use("/auth", authRoutes);
router.use("/category", categoryRoutes);
router.use("/subCategory", subCategoryRoutes);

export default router;
