import { Model } from "mongoose";

export type IReview = {
  id: string;
  email: string;
  reviewText: string;
};

export type ReviewModel = Model<IReview, Record<string, unknown>>;
