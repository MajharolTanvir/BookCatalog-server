"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_route_1 = require("../app/modules/Book/book.route");
const user_route_1 = require("../app/modules/User/user.route");
const review_route_1 = require("../app/modules/review/review.route");
const wishlist_route_1 = require("../app/modules/Wishlist/wishlist.route");
const Readlist_route_1 = require("../app/modules/ReadList/Readlist.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/users",
        route: user_route_1.UserRoutes,
    },
    {
        path: "/books",
        route: book_route_1.BookRoutes,
    },
    {
        path: "/reviews",
        route: review_route_1.ReviewRoutes,
    },
    {
        path: "/wishlists",
        route: wishlist_route_1.WishlistRoutes,
    },
    {
        path: "/readlists",
        route: Readlist_route_1.ReadListRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
