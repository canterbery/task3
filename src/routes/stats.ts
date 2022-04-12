import express from "express";
import { getStats } from "../service/stats";

const router = express.Router();

router.get("/", getStats);

export default router;
