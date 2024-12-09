import { Router } from "express";
import { createStats, getTopPlayerStats } from "../controllers";

const router = Router();

router.get("/stats", getTopPlayerStats);
router.post("/stats", createStats);

export default router;
