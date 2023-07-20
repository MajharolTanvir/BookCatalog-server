"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishListService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const wishlist_model_1 = require("./wishlist.model");
const book_model_1 = require("../Book/book.model");
const addNewWishList = (wishlistData) => __awaiter(void 0, void 0, void 0, function* () {
    const checkData = yield wishlist_model_1.WishList.findOne({
        $and: [{ id: wishlistData.id }, { email: wishlistData.email }],
    });
    if (checkData) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, "Data already added");
    }
    const addedWishList = yield wishlist_model_1.WishList.create(wishlistData);
    if (!addedWishList) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Failed to add Wishlist");
    }
    return addedWishList;
});
const getSingleWishList = (id, email) => __awaiter(void 0, void 0, void 0, function* () {
    const getWishList = yield wishlist_model_1.WishList.findOne({
        $and: [{ id: id }, { email: email }],
    });
    return getWishList;
});
const getAllWishlist = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const wishlistsData = yield wishlist_model_1.WishList.find({ email: email });
    const wishlists = wishlistsData.map((wishData) => wishData.id);
    const books = yield book_model_1.Book.find({ _id: { $in: wishlists } });
    return books;
});
const deleteWishList = (id, email) => __awaiter(void 0, void 0, void 0, function* () {
    const findWishlist = yield wishlist_model_1.WishList.findOne({
        $and: [{ id: id }, { email: email }],
    });
    const result = yield wishlist_model_1.WishList.findByIdAndDelete({ _id: findWishlist._id });
    return result;
});
exports.WishListService = {
    addNewWishList,
    getSingleWishList,
    getAllWishlist,
    deleteWishList,
};
