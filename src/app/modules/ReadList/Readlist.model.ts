import { Schema, model } from "mongoose";
import { IReadList, ReadListModel } from "./Readlist.interface";

const ReadListSchema = new Schema<IReadList, ReadListModel>(
  {
    id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Reading", "Reading soon", "Finished"],
      required: true,
    },
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
