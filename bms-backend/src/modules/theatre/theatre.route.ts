import express from "express";
import * as TheaterController from "./theatre.controller";
import { validate } from "../../middleware/validate";
import { TheaterSchema } from "./theatre.validation";

const router = express.Router();

router.post("/", validate(TheaterSchema), TheaterController.createTheater);
router.get("/", TheaterController.getTheaters);

export default router;