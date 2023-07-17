import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { UserService } from "./user.service";
import config from "../../../config";

const signUpUser = catchAsync(async (req: Request, res: Response) => {
  const userData = req.body;

  const result = await UserService.signUpUser(userData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Sign Up Successful!",
    data: result,
  });
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const userData = req.body;

  const result = await UserService.loginUser(userData);
  const { refreshToken, ...others } = result;

  const cookieOptions = {
    secure: config.env === "production",
    httpOnly: true,
  };

  res.cookie("refreshToken", refreshToken, cookieOptions);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Login Successful!",
    data: others,
  });
});

export const UserController = {
  signUpUser,
  loginUser,
};
