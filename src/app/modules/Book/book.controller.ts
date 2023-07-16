import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { Request, Response } from "express";
import pick from "../../../shared/pick";
import { bookFilterableFields } from "./book.constant";
import { BookService } from "./book.service";

const addNewBook = catchAsync(async (req: Request, res: Response) => {
  const { ...bookData } = req.body;

  const result = await BookService.addNewBook(bookData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book added successfully!",
    data: result,
  });
});

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, bookFilterableFields);
  const result = await BookService.getAllBooks(filters);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Books retrieved successfully!",
    data: result,
  });
});

export const BookController = {
  addNewBook,
  getAllBooks,
};
