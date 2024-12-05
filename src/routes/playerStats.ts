import { Router } from "express";
import { getTopPlayerStats } from "../controllers/statsController";

const router = Router();

router.get("/stats", getTopPlayerStats);

export default router;
