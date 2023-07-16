import express from "express";
import { BookController } from "./book.controller";
// import { BookController } from "./book.controller";

const router = express.Router();

router.post("/add-new-book", BookController.addNewBook);
router.get("/", BookController.getAllBooks);

export const BookRoutes = router;
