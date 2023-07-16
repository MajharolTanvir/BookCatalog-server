import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { IBook, IBookFilters } from "./book.interface";
import { Book } from "./book.model";
import { bookSearchableFields } from "./book.constant";
import { JwtPayload } from "jsonwebtoken";

const addNewBook = async (bookData: IBook): Promise<IBook | null> => {
  const addedBook = await Book.create(bookData);

  if (!addedBook) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to add book");
  }

  return addedBook;
};

const getAllBooks = async (filters: IBookFilters) => {
  const { searchTerm, ...filtersData } = filters;

  const conditions = [];
  if (searchTerm) {
    conditions.push({
      $or: bookSearchableFields.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    conditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const whereConditions = conditions.length > 0 ? { $and: conditions } : {};

  const books = await Book.find(whereConditions);

  if (!books) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to get books");
  }

  return books;
};

const getSingleBook = async (id: string) => {
  const book = await Book.findOne({ _id: id });
  return book;
};

const updateBook = async (
  id: string,
  updatedData: IBook,
  userEmail: JwtPayload,
) => {
  const availableBook = await Book.findOne({ _id: id });

  if (availableBook && userEmail?.userEmail !== availableBook?.addedBy) {
    throw new ApiError(httpStatus.FORBIDDEN, "Forbidden Access");
  }
  const result = await Book.findByIdAndUpdate({ _id: id }, updatedData, {
    new: true,
  });
  return result;
};

export const BookService = {
  addNewBook,
  getAllBooks,
  getSingleBook,
  updateBook,
};
