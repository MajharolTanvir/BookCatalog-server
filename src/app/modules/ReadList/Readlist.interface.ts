import { Schema } from "mongoose";
import { Model } from "mongoose";

export type IReadList = {
  id: Schema.Types.ObjectId;
  email: string;
  reading: boolean;
  readSoon: boolean;
  finish: boolean;
};

export type ReadListModel = Model<IReadList, Record<string, unknown>>;
