"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadList = void 0;
const mongoose_1 = require("mongoose");
const ReadListSchema = new mongoose_1.Schema({
    id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Book",
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    reading: { type: Boolean, required: true, default: false },
    readSoon: { type: Boolean, required: true, default: false },
    finish: { type: Boolean, required: true, default: false },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.ReadList = (0, mongoose_1.model)("ReadList", ReadListSchema);
