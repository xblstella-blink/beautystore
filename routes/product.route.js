import {
  ratingProduct,
  getAllProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controller/product.controller.js";
import express from "express";

const router = express.Router();

router.put("/rating/:productId", ratingProduct);
router.get("/", getAllProducts);
router.get("/find/:id", getProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
