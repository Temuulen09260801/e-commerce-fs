import { Router } from "express";
import {
  forgetPassword,
  currentUser,
  login,
  signup,
  verifyOtp,
  verifyPassword,
  newPassword,
} from "../controllers/auth-controller";
import { authentication } from "../middlewares/authentication";

const router = Router();

router.route("/current-user").get(authentication, currentUser);
router.route("/forget-password").post(forgetPassword);
router.route("/verify-password").post(verifyPassword);
router.route("/verify-otp").post(verifyOtp);
router.route("/new-password").post(newPassword);
router.route("/signup").post(signup);
router.route("/login").post(login);

export default router;
