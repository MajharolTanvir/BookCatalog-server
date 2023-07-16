"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
// import { BookController } from "./book.controller";
const router = express_1.default.Router();
router.patch("/:id", (0, auth_1.default)(), book_controller_1.BookController.updateBook);
router.get("/", book_controller_1.BookController.getAllBooks);
router.get("/:id", book_controller_1.BookController.getSingleBook);
router.delete("/:id", (0, auth_1.default)(), book_controller_1.BookController.deleteBook);
router.post("/add-new-book", book_controller_1.BookController.addNewBook);
exports.BookRoutes = router;
