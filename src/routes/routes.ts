import express from "express";
import { BookRoutes } from "../app/modules/Book/book.route";
import { UserRoutes } from "../app/modules/User/user.route";
import { ReviewRoutes } from "../app/modules/review/review.route";
import { WishlistRoutes } from "../app/modules/Wishlist/wishlist.route";
import { ReadListRoutes } from "../app/modules/ReadList/Readlist.route";
const router = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },

  {
    path: "/books",
    route: BookRoutes,
  },
  {
    path: "/reviews",
    route: ReviewRoutes,
  },
  {
    path: "/wishlists",
    route: WishlistRoutes,
  },
  {
    path: "/readlists",
    route: ReadListRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
