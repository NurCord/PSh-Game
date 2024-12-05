import { Request, Response } from "express";

export const createStats = async (
  _req: Request,
  res: Response
): Promise<any> => {
  try {
    return res.status(200).json({ message: "Stats generated successfully" });
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};
