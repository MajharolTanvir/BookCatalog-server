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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadListService = void 0;
const Readlist_model_1 = require("./Readlist.model");
const addReadList = (readListData) => __awaiter(void 0, void 0, void 0, function* () {
    const addedReadList = yield Readlist_model_1.ReadList.create(readListData);
    return addedReadList;
});
const getSingleReadList = (id, email) => __awaiter(void 0, void 0, void 0, function* () {
    const getReadList = yield Readlist_model_1.ReadList.findOne({
        $and: [{ id: id }, { email: email }],
    });
    return getReadList;
});
const getAllReadList = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const getReadList = yield Readlist_model_1.ReadList.find({ email: email }).populate("id");
    return getReadList;
});
const updateReadList = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const updateData = yield Readlist_model_1.ReadList.findByIdAndUpdate(id, payload, {
        new: true,
    });
    return updateData;
});
exports.ReadListService = {
    addReadList,
    getSingleReadList,
    getAllReadList,
    updateReadList,
};
