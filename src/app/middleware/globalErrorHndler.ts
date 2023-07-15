import { ErrorRequestHandler } from "express";
import { IGenericErrorMessage } from "../../Interface/error";
import config from "../../config";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(400).json({ err: err });

  const statusCode = 500;
  const message = "Something went wrong";
  const errorMessages: IGenericErrorMessage[] = [];

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== "production" ? err?.stack : undefined,
  });

  next();
};

export default globalErrorHandler;
