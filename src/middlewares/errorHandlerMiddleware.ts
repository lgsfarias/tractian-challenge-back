import { ErrorRequestHandler } from 'express';
import AppError from '../utils/AppError';

const errorHandlerMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: err.statusCode,
      message: err.message,
    });
  }

  console.error(err);
  return res.status(500).json({
    status: 500,
    message: 'Internal Server Error',
  });
};

export default errorHandlerMiddleware;
