import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { Review } from "./review.model";
import { IReview } from "./review.interface";
import { JwtPayload } from "jsonwebtoken";

const addReview = async (
  review: IReview,
  user: JwtPayload,
): Promise<IReview | null> => {
  if (user?.userEmail !== review?.email) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Forbidden access");
  }
  const addedReview = await Review.create(review);
  if (!addedReview) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to add Review");
  }
  return addedReview;
};

const getReviews = async () => {
  const allReviews = await Review.find();
  return allReviews;
};

export const ReviewService = {
  addReview,
  getReviews,
};
