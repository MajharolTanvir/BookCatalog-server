import express from "express";
import { UserController } from "./user.controller";
import auth from "../../middleware/auth";

const router = express.Router();

router.post("/signup", UserController.signUpUser);
router.post("/login", UserController.loginUser);
router.patch("/add-wishlist", auth(), UserController.addWishlist);

export const UserRoutes = router;
