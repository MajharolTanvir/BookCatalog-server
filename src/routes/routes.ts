import express from "express";
import { BookRoutes } from "../app/modules/Book/book.route";
import { UserRoutes } from "../app/modules/User/user.route";
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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
