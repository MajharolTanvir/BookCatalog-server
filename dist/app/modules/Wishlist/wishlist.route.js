"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistRoutes = void 0;
const express_1 = __importDefault(require("express"));
const wishlist_controller_1 = require("./wishlist.controller");
const router = express_1.default.Router();
router.get("/", wishlist_controller_1.WishListController.getAllWishList);
router.get("/:id/:email", wishlist_controller_1.WishListController.getSingleWishList);
router.delete("/:id/:email", wishlist_controller_1.WishListController.deleteWishList);
router.post("/add-wishlist", wishlist_controller_1.WishListController.addNewWishlist);
exports.WishlistRoutes = router;
