import { NextFunction, Request, Response } from "express";
import { envVars } from "../config/env";

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = 500;
    const message = `Something went wrong ${err.message}`;
  if (err) {
    res.status(statusCode).json({
      success: false,
      message,
      err,
      stack: envVars.NODE_ENV === "Development" ? err.stack : null,
    });
  }
}