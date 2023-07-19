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
  console.log(checkData);
  if (checkData) {
    throw new ApiError(httpStatus.CONFLICT, "Data already added");
  }
  const addedWishList = await WishList.create(wishlistData);

  if (!addedWishList) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to add Wishlist");
  }
  return addedWishList;
};

const getSingleWishList = async (id: string): Promise<IWishlist | null> => {
  const getWishList = await WishList.findOne({ id: id });

  return getWishList;
};

const getAllWishlist = async (email: string) => {
  const wishlistsData = await WishList.find({ email: email });
  const wishlists = wishlistsData.map((wishData) => wishData.id);
  const books = await Book.find({ _id: { $in: wishlists } });

  return books;
};

export const WishListService = {
  addNewWishList,
  getSingleWishList,
  getAllWishlist,
};
