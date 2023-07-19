import { Schema, model } from "mongoose";
import { IWishlist, WishListModel } from "./wishlist.interface";

const WishListSchema = new Schema<IWishlist, WishListModel>(
  {
    id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    status: {
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

export const WishList = model<IWishlist, WishListModel>(
  "WishList",
  WishListSchema,
);
