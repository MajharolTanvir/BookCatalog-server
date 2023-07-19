import { Review } from "./review.model";
import { IReview } from "./review.interface";

const addReview = async (review: IReview): Promise<IReview | null> => {
  const addedReview = await Review.create(review);
  return addedReview;
};

const getReviews = async (id: string) => {
  const allReviews = await Review.find({ id: id });
  return allReviews;
};

export const ReviewService = {
  addReview,
  getReviews,
};
