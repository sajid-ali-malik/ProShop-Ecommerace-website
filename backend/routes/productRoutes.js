import express from "express";
const router = express.Router();
import { getProducts, getProductById } from "../controllers/productController";

router.get("/").get(getProducts);
router.get("/:id").get(getProductById);

export default router;
