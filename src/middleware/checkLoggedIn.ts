import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const checkLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  const cookieName = process.env.COOKIE_NAME || "defaultCookieName";
  const token = req.cookies[cookieName];

  if (!token) {
    return res.status(401).json({ message: "Not logged in" });
  }

  try {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      return res.status(500).json({ message: "JWT secret is not defined" });
    }
    const decoded = jwt.verify(token, jwtSecret);
    req.userId = (decoded as any).id;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Not logged in" });
  }
};

export default checkLoggedIn;
