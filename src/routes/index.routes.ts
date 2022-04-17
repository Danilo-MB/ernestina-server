import { Router } from "express";
import homeIndex from "../controllers/index.controller";

const router = Router();

router.route("/").get(homeIndex);

export default router;