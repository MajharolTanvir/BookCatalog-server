import express from "express";
import { WishListController } from "./wishlist.controller";

const router = express.Router();

router.get("/", WishListController.getAllWishList);
router.get("/:id/:email", WishListController.getSingleWishList);
router.delete("/:id/:email", WishListController.deleteWishList);
router.post("/add-wishlist", WishListController.addNewWishlist);

export const WishlistRoutes = router;
