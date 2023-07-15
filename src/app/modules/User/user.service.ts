import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { IUser } from "./user.interface";
import { User } from "./user.model";
import config from "../../../config";
import { Secret } from "jsonwebtoken";
import { JwtHelper } from "../../../helper/jwtHelper";

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

export const UserService = {
  signUpUser,
};
