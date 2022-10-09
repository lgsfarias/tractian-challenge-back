import { Router } from 'express';
import EmployeeController from '../controllers/employee.controller';
import validateSchemaMiddleware from '../middlewares/validadeSchemaMiddleware';
import verifyTokenMiddleware from '../middlewares/verifyTokenMiddleware';
import * as schemas from '../schemas';

const employeeController = new EmployeeController();
const employeeRouter = Router();

employeeRouter.post(
  '/',
  verifyTokenMiddleware,
  validateSchemaMiddleware(schemas.employeeSchema),
  (req, res) => employeeController.create(req, res),
);

employeeRouter.get(
  '/by-company/:companyId',
  verifyTokenMiddleware,
  (req, res) => employeeController.list(req, res),
);

employeeRouter.get('/by-unit/:id', verifyTokenMiddleware, (req, res) =>
  employeeController.findByUnit(req, res),
);

employeeRouter.get('/:id', verifyTokenMiddleware, (req, res) =>
  employeeController.show(req, res),
);

employeeRouter.put(
  '/:id',
  verifyTokenMiddleware,
  validateSchemaMiddleware(schemas.employeeSchema),
  (req, res) => employeeController.update(req, res),
);

employeeRouter.delete('/:id', verifyTokenMiddleware, (req, res) =>
  employeeController.delete(req, res),
);

export default employeeRouter;
