import mongoose from "mongoose";
import { IGenericErrorResponse } from "../Interface/common";
import { IGenericErrorMessage } from "../Interface/error";

export const handleValidationError = (
  err: mongoose.Error.ValidationError,
): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = Object.values(err?.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: el?.path,
        message: el?.message,
      };
    },
  );

  const statusCode = 400;
  return {
    statusCode,
    message: "ValidationError",
    errorMessages: errors,
  };
};
