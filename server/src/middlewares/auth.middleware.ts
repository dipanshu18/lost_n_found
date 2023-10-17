import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.SECRET;

export function verifyToken(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(
    token,
    secretKey as jwt.Secret,
    (err: jwt.VerifyErrors | any, decoded: JwtPayload | any) => {
      if (err) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      // Add userId to the Request object
      req.body.userId = (decoded as JwtPayload).userId;
      next();
    }
  );
}
