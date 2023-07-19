import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { Request, Response } from "express";
import { WishListService } from "./wishlist.service";

const addNewWishlist = catchAsync(async (req: Request, res: Response) => {
  const wishListData = req.body;

  const result = await WishListService.addNewWishList(wishListData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "WishList added successfully!",
    data: result,
  });
});

const getSingleWishList = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await WishListService.getSingleWishList(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get WishList successfully!",
    data: result,
  });
});

// const getAllWishList = catchAsync(async (req: Request, res: Response) => {
//   const filters = pick(req.query, bookFilterableFields);
//   const result = await BookService.getAllBooks(filters);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Books retrieved successfully!",
//     data: result,
//   });
// });

// const deleteWishList = catchAsync(async (req: Request, res: Response) => {
//   const { id } = req.params;

//   const result = await BookService.deleteBook(id);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Book deleted successfully!",
//     data: result,
//   });
// });

export const WishListController = {
  addNewWishlist,
  getSingleWishList,
  //   getAllWishList,
  //   deleteWishList,
};
