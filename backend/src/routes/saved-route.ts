import { Router } from "express";
import { getAllSavedProduct } from "../controllers/saved-controller";

const router = Router();

router.route("/").get(getAllSavedProduct);

export default router;
