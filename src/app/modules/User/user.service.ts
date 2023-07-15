import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { IUser, IUserLogin } from "./user.interface";
import { User } from "./user.model";
import config from "../../../config";
import { Secret } from "jsonwebtoken";
import { JwtHelper } from "../../../helper/jwtHelper";
import bcrypt from "bcrypt";

const signUpUser = async (userData: IUser) => {
  const createdUser = await User.create(userData);

  if (!createdUser) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed To Sign Up");
  }

  const { email: userEmail } = createdUser;
  const accessToken = JwtHelper.createToken(
    { userEmail },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string,
  );

  return {
    createdUser,
    accessToken,
  };
};

const loginUser = async (userData: IUserLogin) => {
  const { email, password } = userData;
  const isUserExist = await User.findOne({ email: email });

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "User does not exist");
  }

  const isPasswordMatched = await bcrypt.compare(
    password,
    isUserExist?.password,
  );

  if (isUserExist.password && !isPasswordMatched) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Password is incorrect");
  }

  const { email: userEmail } = isUserExist;
  const accessToken = JwtHelper.createToken(
    { userEmail },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string,
  );

  const refreshToken = JwtHelper.createToken(
    { userEmail },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expire_in as string,
  );

  return {
    accessToken,
    refreshToken,
  };
};

export const UserService = {
  signUpUser,
  loginUser,
};
