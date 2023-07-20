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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const book_model_1 = require("./book.model");
const book_constant_1 = require("./book.constant");
const addNewBook = (bookData) => __awaiter(void 0, void 0, void 0, function* () {
    const addedBook = yield book_model_1.Book.create(bookData);
    if (!addedBook) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Failed to add book");
    }
    return addedBook;
});
const getAllBooks = (filters) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = filters, filtersData = __rest(filters, ["searchTerm"]);
    const conditions = [];
    if (searchTerm) {
        conditions.push({
            $or: book_constant_1.bookSearchableFields.map((field) => ({
                [field]: {
                    $regex: searchTerm,
                    $options: "i",
                },
            })),
        });
    }
    if (Object.keys(filtersData).length) {
        conditions.push({
            $and: Object.entries(filtersData).map(([field, value]) => ({
                [field]: value,
            })),
        });
    }
    const whereConditions = conditions.length > 0 ? { $and: conditions } : {};
    const books = yield book_model_1.Book.find(whereConditions);
    if (!books) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Failed to get books");
    }
    return books;
});
const getSingleBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield book_model_1.Book.findOne({ _id: id });
    if (book) {
        return book;
    }
    else {
        return "The Book is not found";
    }
});
const updateBook = (id, updatedData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.findByIdAndUpdate({ _id: id }, updatedData, {
        new: true,
    });
    return result;
});
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.findByIdAndDelete({ _id: id });
    return result;
});
exports.BookService = {
    addNewBook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook,
};
