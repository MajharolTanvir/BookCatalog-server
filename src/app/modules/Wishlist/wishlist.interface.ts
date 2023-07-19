import { Model } from "mongoose";

export type IWishlist = {
  id: string;
  email: string;
  status: string;
};

export type WishListModel = Model<IWishlist, Record<string, unknown>>;
