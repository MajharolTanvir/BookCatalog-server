import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import globalErrorHandler from "./app/middleware/globalErrorHndler";
import routes from "./routes/routes";
import sendResponse from "./shared/sendResponse";
import httpStatus from "http-status";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(globalErrorHandler);

app.use("/api/v1/", routes);

app.get("/", (req: Request, res: Response) => {
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Server is running successfully!",
  });
});

export default app;
