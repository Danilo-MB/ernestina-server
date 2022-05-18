import { Router } from "express";
import { getProducts, createProduct } from "../controllers/products.controllers";

const router = Router();

router.route("/")
    .get(getProducts)
    .post(createProduct)

export default router;