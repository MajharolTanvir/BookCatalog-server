import httpStatus from "http-status";
import sendResponse from "../../../shared/sendResponse";
import catchAsync from "../../../shared/catchAsync";
import { Request, Response } from "express";
import { ReviewService } from "./review.service";
import { JwtPayload } from "jsonwebtoken";

const addReview = catchAsync(async (req: Request, res: Response) => {
  const reviewData = req.body;
  const user = req.user as JwtPayload;
  const result = await ReviewService.addReview(reviewData, user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Review added successfully",
    data: result,
  });
});

const getReviews = catchAsync(async (req: Request, res: Response) => {
  const result = await ReviewService.getReviews();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Reviews retrieved successfully",
    data: result,
  });
});

export const ReviewController = {
  addReview,
  getReviews,
};
