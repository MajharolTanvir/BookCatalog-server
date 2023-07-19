import express from "express";
import { ReviewController } from "./review.controller";
import auth from "../../middleware/auth";

const router = express.Router();
router.post("/add-review", auth(), ReviewController.addReview);

router.get("/:id", ReviewController.getReviews);

export const ReviewRoutes = router;
