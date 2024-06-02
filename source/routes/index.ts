import express from "express";
import authRoutes from "../modules/auth/authRoutes";
import categoryRoutes from "../modules/category/categoryRoutes";
const router = express.Router();

router.use("/auth", authRoutes);

router.use("/category", categoryRoutes);

export default router;
