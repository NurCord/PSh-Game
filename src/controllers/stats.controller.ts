import { Request, Response } from "express";
import { PlayerStat } from "../models";

export const getTopPlayerStats = async (req: Request, res: Response) => {
  try {
    const { limit } = req.params;
    const topPlayerStatScores = await PlayerStat.findAll({
      order: [["score", "DESC"]],
      limit: Number(limit) || 10,
    });
    res.status(200).json(topPlayerStatScores);
  } catch (error) {
    res.status(500).send("Error getting top player stats");
  }
};
