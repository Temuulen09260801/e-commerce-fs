import { Router } from "express";
import { getAllProduct, getProduct } from "../controllers/product-controller";

const router = Router();

// router.route("/").post(getAllCategory).post(createCategory);
router.route("/").get(getAllProduct);
router.route("/:productId").post(getProduct);

export default router;
