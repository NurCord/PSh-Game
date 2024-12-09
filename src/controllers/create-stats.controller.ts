import { Request, Response } from "express";
import { createPlayerStats } from "../services";

export const createStats = async (_req: Request, res: Response) => {
  try {
    await createPlayerStats();
    res.status(201).json({ message: "Stats generated successfully" });
  } catch (error) {
    res.status(500).send("Error generating stats");
  }
};
