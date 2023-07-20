"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadListRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Readlist_controller_1 = require("./Readlist.controller");
const router = express_1.default.Router();
router.get("/", Readlist_controller_1.ReadListController.getAllReadList);
router.get("/:id/:email", Readlist_controller_1.ReadListController.getSingleReadList);
router.patch("/:id", Readlist_controller_1.ReadListController.updateReadList);
router.post("/add-readlist", Readlist_controller_1.ReadListController.addReadList);
exports.ReadListRoutes = router;
