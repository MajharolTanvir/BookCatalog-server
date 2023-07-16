import { Model, Types } from "mongoose";

export type IWishlist = {
  bookStatus: {
    bookId: Types.ObjectId;
    status: "Buying soon" | "Reading" | "Reading soon" | "Finished";
  }[];
};

export type IUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  bookStatus?: IWishlist;
};

export type IUserLogin = {
  email: string;
  password: string;
};

export type IUserLoginResponse = {
  accessToken: string;
  refreshToken?: string;
};

export type IRefreshTokenResponse = {
  accessToken: string;
};

export type UserModel = Model<IUser, Record<string, unknown>>;
