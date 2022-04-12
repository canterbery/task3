import { Request, Response } from "express";
import initialState from "../initialState";
import { getSummaryStats } from "./getSummaryStats";

export const getStats = (req: Request, res: Response) => {
  try {
    const stats = getSummaryStats(initialState);
    res.send(stats);
  } catch (e) {
    res.status(500).json(e);
  }
};
