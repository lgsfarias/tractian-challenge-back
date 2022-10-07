import { Router } from 'express';
import UserController from '../controllers/user.controller';
import validateSchemaMiddleware from '../middlewares/validadeSchemaMiddleware';
import verifyTokenMiddleware from '../middlewares/verifyTokenMiddleware';
import * as schemas from '../schemas';

const userController = new UserController();
const userRouter = Router();

userRouter.post(
  '/add-company',
  verifyTokenMiddleware,
  validateSchemaMiddleware(schemas.addCompany),
  (req, res) => userController.addCompany(req, res),
);

export default userRouter;
