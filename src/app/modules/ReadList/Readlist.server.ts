import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
// import { Book } from "../Book/book.model";
import { IReadList } from "./Readlist.interface";
import { ReadList } from "./Readlist.model";

const addReadList = async (
  readListData: IReadList,
): Promise<IReadList | null> => {
  const checkData = await ReadList.findOne({
    $and: [{ id: readListData.id }, { email: readListData.email }],
  });
  if (checkData) {
    throw new ApiError(
      httpStatus.CONFLICT,
      `${readListData.status} already added`,
    );
  }
  const addedReadList = await ReadList.create(readListData);

  if (!addedReadList) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to add Wishlist");
  }
  return addedReadList;
};

const getSingleReadList = async (
  id: string,
  email: string,
): Promise<IReadList | null> => {
  const getReadList = await ReadList.findOne({
    $and: [{ id: id }, { email: email }],
  });

  return getReadList;
};

// const getAllWishlist = async (email: string) => {
//   const wishlistsData = await WishList.find({ email: email });
//   const wishlists = wishlistsData.map((wishData) => wishData.id);
//   const books = await Book.find({ _id: { $in: wishlists } });

//   return books;
// };

// const deleteWishList = async (id: string, email: string) => {
//   const findWishlist = await WishList.findOne({
//     $and: [{ id: id }, { email: email }],
//   });
//   const result = await WishList.findByIdAndDelete({ _id: findWishlist!._id });

//   return result;
// };

export const ReadListService = {
  addReadList,
  getSingleReadList,
  //   getAllWishlist,
  //   deleteWishList,
};
