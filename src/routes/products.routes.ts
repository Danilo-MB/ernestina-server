import { Router } from "express";
import { getProducts } from "../controllers/products.controllers";

const router = Router();

router.route("/").get(getProducts)

export default router;