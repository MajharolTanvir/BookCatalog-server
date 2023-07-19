"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const user_model_1 = require("./user.model");
const jwtHelper_1 = require("../../../helper/jwtHelper");
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../../config"));
const signUpUser = (userData) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const userExist = yield user_model_1.User.findOne({
      email: userData.email,
    });
    if (userExist) {
      throw new ApiError_1.default(
        http_status_1.default.CONFLICT,
        "This email already exist",
      );
    }
    const createdUser = yield user_model_1.User.create(userData);
    if (!createdUser) {
      throw new ApiError_1.default(
        http_status_1.default.BAD_REQUEST,
        "Failed To Sign Up",
      );
    }
    const { email: userEmail } = createdUser;
    const accessToken = jwtHelper_1.JwtHelper.createToken(
      { userEmail },
      config_1.default.jwt.secret,
      config_1.default.jwt.expires_in,
    );
    return {
      createdUser,
      accessToken,
    };
  });
const loginUser = (userData) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = userData;
    const isUserExist = yield user_model_1.User.findOne({ email: email });
    if (!isUserExist) {
      throw new ApiError_1.default(
        http_status_1.default.NOT_FOUND,
        "User does not exist",
      );
    }
    const isPasswordMatched = yield bcrypt_1.default.compare(
      password,
      isUserExist.password,
    );
    if (isUserExist.password && !isPasswordMatched) {
      throw new ApiError_1.default(
        http_status_1.default.UNAUTHORIZED,
        "Password is incorrect",
      );
    }
    const { email: userEmail, firstName, lastName } = isUserExist;
    const accessToken = jwtHelper_1.JwtHelper.createToken(
      { userEmail },
      config_1.default.jwt.secret,
      config_1.default.jwt.expires_in,
    );
    const refreshToken = jwtHelper_1.JwtHelper.createToken(
      { userEmail },
      config_1.default.jwt.refresh_secret,
      config_1.default.jwt.refresh_expire_in,
    );
    return {
      firstName,
      lastName,
      email,
      accessToken,
      refreshToken,
    };
  });
exports.UserService = {
  signUpUser,
  loginUser,
};
