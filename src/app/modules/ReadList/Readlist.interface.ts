import { Model } from "mongoose";

type IStatus = {
  status: "Reading" | "Reading soon" | "Finished";
};

export type IReadList = {
  id: string;
  email: string;
  status: IStatus;
};

export type ReadListModel = Model<IReadList, Record<string, unknown>>;
