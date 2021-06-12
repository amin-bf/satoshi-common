import mongoose from "mongoose";
import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface IUserPayload {
  id: string;
  name: string;
  age: number;
  score: number;
  iat: string;
}

export const currentUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.session!.jwt;

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!) as IUserPayload;
    const user = payload;
    req.currentUser = user;
  } catch (err) {}

  next();
};
