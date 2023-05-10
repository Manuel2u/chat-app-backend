import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv"
dotenv.config()

const handleErrrors = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.statusCode ? err.statusCode : 500;

  res.status(status).json({
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
    data: err.data,
  });
  next(err);
};

export default handleErrrors