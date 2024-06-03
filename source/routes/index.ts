import express from "express";
import authRoutes from "../modules/auth/authRoutes";
import subCategoryRoutes from "../modules/subCategory/subCategoryRoutes";
const router = express.Router();

router.use("/auth", authRoutes);
router.use("/subCategory", subCategoryRoutes);

export default router;
