import express, { Request, Response } from "express";

export const app = express();

app.use("/", (req: Request, res: Response) => {
  console.log("root route");
  res.status(200).json({
    message: "Welcome to Tour Management System Beckend",
  });
});
