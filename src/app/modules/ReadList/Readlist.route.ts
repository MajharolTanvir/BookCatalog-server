import express from "express";
import { ReadListController } from "./Readlist.controller";

const router = express.Router();

// router.get("/", ReadListController.getAllWishList);
router.get("/:id/:email", ReadListController.getSingleReadList);
// router.delete("/:id/:email", ReadListController.deleteWishList);
router.post("/add-readlist", ReadListController.addReadList);

export const ReadListRoutes = router;
