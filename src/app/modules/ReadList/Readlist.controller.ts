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
    message: "Read list added successfully!",
    data: result,
  });
});

const getSingleReadList = catchAsync(async (req: Request, res: Response) => {
  const { id, email } = req.params;

  const result = await ReadListService.getSingleReadList(id, email);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get read list successfully!",
    data: result,
  });
});

const getAllReadList = catchAsync(async (req: Request, res: Response) => {
  const { email } = req.query;
  const emailString = typeof email === "string" ? email : "";

  const result = await ReadListService.getAllReadList(emailString);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Read list retrieved successfully!",
    data: result,
  });
});

const updateReadList = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  const result = await ReadListService.updateReadList(id, data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book deleted successfully!",
    data: result,
  });
});

export const ReadListController = {
  addReadList,
  getSingleReadList,
  getAllReadList,
  updateReadList,
};
