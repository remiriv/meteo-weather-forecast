import express from "express";
import { getForecast } from "./controllers/forecast";

export { router }

const router = express.Router()
router.get("/daily", getForecast);
