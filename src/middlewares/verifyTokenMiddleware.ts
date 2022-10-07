import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import UserService from '../services/user.service';
import AppError from '../utils/AppError';

type JwtPayload = {
  userId: string;
};

export default async function verifyTokenMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const userService = new UserService();

  const { authorization } = req.headers;
  if (!authorization) {
    throw new AppError('Token is missing', 401);
  }

  const parts = authorization.split(' ');
  if (!(parts.length === 2)) {
    throw new AppError('Invalid authorization header', 401);
  }

  const [scheme, token] = parts;
  if (!/^Bearer$/i.test(scheme)) {
    throw new AppError('Invalid authorization header', 401);
  }

  let userId: string;
  try {
    const secret = process.env.JWT_SECRET as string;
    const decoded = jwt.verify(token, secret) as JwtPayload;
    userId = decoded.userId;
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      throw new AppError('Token expired', 401);
    }
    throw new AppError('Invalid token', 401);
  }

  const user = await userService.findById(userId);
  if (!user) {
    throw new AppError('Invalid token', 401);
  }

  res.locals.user = user;
  next();
}
