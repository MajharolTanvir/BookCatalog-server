import httpStatus from "http-status";
import sendResponse from "../../../shared/sendResponse";
import catchAsync from "../../../shared/catchAsync";
import { Request, Response } from "express";
import { ReviewService } from "./review.service";

const addReview = catchAsync(async (req: Request, res: Response) => {
  const reviewData = req.body;
  const result = await ReviewService.addReview(reviewData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Review added successfully",
    data: result,
  });
});

const getReviews = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await ReviewService.getReviews(id);

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
