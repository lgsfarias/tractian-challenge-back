import { NextFunction, Request, Response } from 'express';
import { ObjectSchema } from 'joi';

const validateSchemaMiddleware = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).send({
        status: 400,
        message: error.details.map((err) => err.message).join(', '),
      });
    }
    next();
  };
};

export default validateSchemaMiddleware;
