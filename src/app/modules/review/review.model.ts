import { Schema, model } from "mongoose";
import { IReview, ReviewModel } from "./review.interface";

const ReviewSchema = new Schema<IReview, ReviewModel>(
  {
    email: {
      type: String,
      required: true,
    },
    reviewText: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const Review = model<IReview, ReviewModel>("Review", ReviewSchema);
