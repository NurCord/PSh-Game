import { Request, Response } from "express";
import { createPlayerStats } from "../services";

export const createStats = async (
  _req: Request,
  res: Response
): Promise<any> => {
  try {
    await createPlayerStats()
    return res.status(200).json({ message: "Stats generated successfully" });
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};
