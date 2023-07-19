import express from "express";
import { WishListController } from "./wishlist.controller";

const router = express.Router();

// router.get("/", WishListController.getAllWishList);
// router.delete("/:id", WishListController.deleteWishList);
router.post("/add-wishlist", WishListController.addNewWishlist);

export const WishlistRoutes = router;
