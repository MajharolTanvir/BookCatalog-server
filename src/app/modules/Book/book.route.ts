import express from "express";
import { BookController } from "./book.controller";
// import { BookController } from "./book.controller";

const router = express.Router();

router.post("/add-new-book", BookController.addNewBook);
router.get("/", BookController.getAllBooks);
router.get("/:id", BookController.getSingleBook);
export const BookRoutes = router;
