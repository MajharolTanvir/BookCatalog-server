import { IGenericErrorResponse } from "../Interface/common";
import { IGenericErrorMessage } from "../Interface/error";

type DuplicateKeyError = {
  code: number;
  keyValue: Record<string, unknown>;
  keyPattern: Record<string, number>;
} & Error;

const handleDuplicateError = (
  error: DuplicateKeyError,
): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = [
    {
      path: "",
      message: error.message,
    },
  ];
  const statusCode = 400;
  let duplicateValue = null;
  if (error.keyValue) {
    duplicateValue = Object.keys(error.keyPattern);
  }
  return {
    statusCode,
    message: `${duplicateValue} is already in use`,
    errorMessages: errors,
  };
};

export default handleDuplicateError;
