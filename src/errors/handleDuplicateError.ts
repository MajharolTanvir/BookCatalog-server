import { IGenericErrorResponse } from "../Interface/common";
import { IGenericErrorMessage } from "../Interface/error";

type DuplicateKeyError = {
  code: number;
  keyValue: Record<string, unknown>;
  keyPattern: Record<string, number>;
} & Error;

const handleDuplicateError = (
  err: DuplicateKeyError,
): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = [
    {
      path: "",
      message: err.message,
    },
  ];
  const statusCode = 400;
  let duplicateValue = null;
  if (err.keyValue) {
    duplicateValue = Object.keys(err.keyPattern);
  }
  return {
    statusCode,
    message: `${duplicateValue} is already in use`,
    errorMessages: errors,
  };
};

export default handleDuplicateError;
