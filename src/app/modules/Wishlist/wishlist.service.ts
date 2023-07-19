import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { IWishlist } from "./wishlist.interface";
import { WishList } from "./wishlist.model";

const addNewWishList = async (
  wishlistData: IWishlist,
): Promise<IWishlist | null> => {
  const addedWishList = await WishList.create(wishlistData);

  if (!addedWishList) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to add Wishlist");
  }
  return addedWishList;
};

// const getAllBooks = async (filters: IBookFilters) => {
//   const { searchTerm, ...filtersData } = filters;

//   const conditions = [];
//   if (searchTerm) {
//     conditions.push({
//       $or: bookSearchableFields.map((field) => ({
//         [field]: {
//           $regex: searchTerm,
//           $options: "i",
//         },
//       })),
//     });
//   }

//   if (Object.keys(filtersData).length) {
//     conditions.push({
//       $and: Object.entries(filtersData).map(([field, value]) => ({
//         [field]: value,
//       })),
//     });
//   }

//   const whereConditions = conditions.length > 0 ? { $and: conditions } : {};

//   const books = await Book.find(whereConditions);

//   if (!books) {
//     throw new ApiError(httpStatus.BAD_REQUEST, "Failed to get books");
//   }

//   return books;
// };

export const WishListService = {
  addNewWishList,
  //   getAllBooks,
};
