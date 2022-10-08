import { Router } from 'express';
import UnitController from '../controllers/unit.controller';
import validateSchemaMiddleware from '../middlewares/validadeSchemaMiddleware';
import verifyTokenMiddleware from '../middlewares/verifyTokenMiddleware';
import * as schemas from '../schemas';

const unitController = new UnitController();
const unitRouter = Router();

unitRouter.post(
  '/',
  verifyTokenMiddleware,
  validateSchemaMiddleware(schemas.unitSchema),
  (req, res) => unitController.create(req, res),
);

unitRouter.get('/', (req, res) => unitController.list(req, res));

unitRouter.get('/:id', (req, res) => unitController.show(req, res));

unitRouter.put(
  '/:id',
  verifyTokenMiddleware,
  validateSchemaMiddleware(schemas.unitSchema),
  (req, res) => unitController.update(req, res),
);

unitRouter.delete('/:id', verifyTokenMiddleware, (req, res) =>
  unitController.delete(req, res),
);

unitRouter.get('/company/:id', verifyTokenMiddleware, (req, res) =>
  unitController.findByCompany(req, res),
);

export default unitRouter;
