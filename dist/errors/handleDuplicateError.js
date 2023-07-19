"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleDuplicateError = (err) => {
  const errors = [
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
exports.default = handleDuplicateError;
