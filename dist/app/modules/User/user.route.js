"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const router = express_1.default.Router();
router.post("/signup", user_controller_1.UserController.signUpUser);
router.post("/login", user_controller_1.UserController.loginUser);
router.patch("/add-wishlist", (0, auth_1.default)(), user_controller_1.UserController.addWishlist);
exports.UserRoutes = router;
