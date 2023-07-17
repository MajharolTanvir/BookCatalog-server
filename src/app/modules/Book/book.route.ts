import express from "express";
import { BookController } from "./book.controller";
import auth from "../../middleware/auth";
// import { BookController } from "./book.controller";

const router = express.Router();

router.get("/", BookController.getAllBooks);
router.get("/:id", BookController.getSingleBook);
router.delete("/:id", auth(), BookController.deleteBook);
router.patch("/:id", auth(), BookController.updateBook);
router.post("/add-new-book", BookController.addNewBook);

export const BookRoutes = router;
