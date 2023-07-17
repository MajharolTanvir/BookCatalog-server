import { Model } from "mongoose";

export type IUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
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
