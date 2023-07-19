import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { IWishlist } from "./wishlist.interface";
import { WishList } from "./wishlist.model";
import { Book } from "../Book/book.model";

const addNewWishList = async (
  wishlistData: IWishlist,
): Promise<IWishlist | null> => {
  const checkData = await WishList.findOne({
    $and: [{ id: wishlistData.id }, { email: wishlistData.email }],
  });
  if (checkData) {
    throw new ApiError(httpStatus.CONFLICT, "Data already added");
  }
  const addedWishList = await WishList.create(wishlistData);

  if (!addedWishList) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to add Wishlist");
  }
  return addedWishList;
};

const getSingleWishList = async (
  id: string,
  email: string,
): Promise<IWishlist | null> => {
  const getWishList = await WishList.findOne({
    $and: [{ id: id }, { email: email }],
  });

  return getWishList;
};

const getAllWishlist = async (email: string) => {
  const wishlistsData = await WishList.find({ email: email });
  const wishlists = wishlistsData.map((wishData) => wishData.id);
  const books = await Book.find({ _id: { $in: wishlists } });

  return books;
};

const deleteWishList = async (id: string, email: string) => {
  const findWishlist = await WishList.findOne({
    $and: [{ id: id }, { email: email }],
  });
  const result = await WishList.findByIdAndDelete({ _id: findWishlist!._id });

  return result;
};

export const WishListService = {
  addNewWishList,
  getSingleWishList,
  getAllWishlist,
  deleteWishList,
};
