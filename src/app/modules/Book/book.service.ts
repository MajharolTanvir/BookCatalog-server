import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { IBook } from "./book.interface";
import { Book } from "./book.model";

const addNewBook = async (bookData: IBook): Promise<IBook | null> => {
  const addedBook = await Book.create(bookData);

  if (!addedBook) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to add book");
  }

  return addedBook;
};

export const BookService = {
  addNewBook,
};
