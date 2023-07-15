import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import globalErrorHandler from "./app/middleware/globalErrorHndler";
import routes from "./routes/routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(globalErrorHandler);

app.use("api/v1/", routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
