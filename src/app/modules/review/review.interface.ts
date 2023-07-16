import { Model, Types } from "mongoose";

export type IReview = {
  id: Types.ObjectId;
  email: string;
  reviewText: string;
};

export type ReviewModel = Model<IReview, Record<string, unknown>>;
