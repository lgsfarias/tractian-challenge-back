import { Router } from 'express';
import UserController from '../controllers/user.controller';
import validateSchemaMiddleware from '../middlewares/validadeSchemaMiddleware';
import verifyTokenMiddleware from '../middlewares/verifyTokenMiddleware';
import * as schemas from '../schemas';

const userController = new UserController();
const userRouter = Router();

userRouter.get('/show-data', verifyTokenMiddleware, (req, res) =>
  userController.showData(req, res),
);

export default userRouter;
