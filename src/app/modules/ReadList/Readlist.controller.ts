import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { Request, Response } from "express";
import { ReadListService } from "./Readlist.server";

const addReadList = catchAsync(async (req: Request, res: Response) => {
  const readListData = req.body;
  const result = await ReadListService.addReadList(readListData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "WishList added successfully!",
    data: result,
  });
});

const getSingleReadList = catchAsync(async (req: Request, res: Response) => {
  const { id, email } = req.params;

  const result = await ReadListService.getSingleReadList(id, email);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get WishList successfully!",
    data: result,
  });
});

// const getAllWishList = catchAsync(async (req: Request, res: Response) => {
//   const { email } = req.query;
//   const emailString = typeof email === "string" ? email : "";

//   const result = await WishListService.getAllWishlist(emailString);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Wishlists retrieved successfully!",
//     data: result,
//   });
// });

// const deleteWishList = catchAsync(async (req: Request, res: Response) => {
//   const { id, email } = req.params;

//   const result = await WishListService.deleteWishList(id, email);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Book deleted successfully!",
//     data: result,
//   });
// });

export const ReadListController = {
  addReadList,
  getSingleReadList,
  //   getAllWishList,
  //   deleteWishList,
};
