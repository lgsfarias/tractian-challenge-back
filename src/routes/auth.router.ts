import { Router } from 'express';
import UserController from '../controllers/user.controller';
import validateSchemaMiddleware from '../middlewares/validadeSchemaMiddleware';
import * as schemas from '../schemas';

const userController = new UserController();
const authRouter = Router();

authRouter.post(
  '/signup',
  validateSchemaMiddleware(schemas.signup),
  (req, res) => userController.signup(req, res),
);
authRouter.post(
  '/login',
  validateSchemaMiddleware(schemas.signin),
  (req, res) => userController.login(req, res),
);

export default authRouter;
