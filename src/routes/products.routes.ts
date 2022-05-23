import { Router } from "express";
import { getProducts, getProduct, createProduct } from "../controllers/products.controllers";

const router: Router = Router();

router.route("/")
    .get(getProducts)
    .post(createProduct)

router.route("/:id").get(getProduct)

export default router;