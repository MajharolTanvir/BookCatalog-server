"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const globalErrorHndler_1 = __importDefault(require("./app/middleware/globalErrorHndler"));
const routes_1 = __importDefault(require("./routes/routes"));
const sendResponse_1 = __importDefault(require("./shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.use("/api/v1/", routes_1.default);
app.get("/", (req, res) => {
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Server is running successfully!",
    });
});
app.use(globalErrorHndler_1.default);
exports.default = app;
