import { Request, Response } from "express";
import PlayerStat from "../models/PlayerStat";

export const getTopPlayerStats = async (
  _req: Request,
  res: Response
): Promise<any> => {
  try {
    const topPlayerStatScores = await PlayerStat.findAll({
      order: [["score", "DESC"]],
      limit: 10,
    });
    return res.status(200).json(topPlayerStatScores);
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};
