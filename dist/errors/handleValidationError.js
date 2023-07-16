"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleValidationError = void 0;
const handleValidationError = (err) => {
  const errors = Object.values(
    err === null || err === void 0 ? void 0 : err.errors,
  ).map((el) => {
    return {
      path: el === null || el === void 0 ? void 0 : el.path,
      message: el === null || el === void 0 ? void 0 : el.message,
    };
  });
  const statusCode = 400;
  return {
    statusCode,
    message: "ValidationError",
    errorMessages: errors,
  };
};
exports.handleValidationError = handleValidationError;
