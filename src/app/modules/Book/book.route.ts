import express from "express";
import { BookController } from "./book.controller";
// import { BookController } from "./book.controller";

const router = express.Router();

router.post("/add-new-book", BookController.addNewBook);

export const BookRoutes = router;
