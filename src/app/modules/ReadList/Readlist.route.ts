import express from "express";
import { ReadListController } from "./Readlist.controller";

const router = express.Router();

router.get("/", ReadListController.getAllReadList);
router.get("/:id/:email", ReadListController.getSingleReadList);
router.patch("/:id", ReadListController.updateReadList);
router.post("/add-readlist", ReadListController.addReadList);

export const ReadListRoutes = router;
