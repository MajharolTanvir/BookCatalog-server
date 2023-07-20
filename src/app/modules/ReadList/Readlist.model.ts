import { Schema, model } from "mongoose";
import { IReadList, ReadListModel } from "./Readlist.interface";

const ReadListSchema = new Schema<IReadList, ReadListModel>(
  {
    id: {
      type: Schema.Types.ObjectId,
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
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const ReadList = model<IReadList, ReadListModel>(
  "ReadList",
  ReadListSchema,
);
