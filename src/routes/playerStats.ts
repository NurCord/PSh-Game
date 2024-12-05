import { Router } from "express";
import { getTopPlayerStats } from "../controllers/statsController";
import { createStats } from "../controllers/createStats";

const router = Router();

router.get("/stats", getTopPlayerStats);
router.post("/create-stats", createStats);

export default router;
