import { Router } from 'express';
import CompanyController from '../controllers/company.controller';
import validateSchemaMiddleware from '../middlewares/validadeSchemaMiddleware';
import verifyTokenMiddleware from '../middlewares/verifyTokenMiddleware';
import * as schemas from '../schemas';

const companyController = new CompanyController();
const companyRouter = Router();

companyRouter.post(
  '/',
  verifyTokenMiddleware,
  validateSchemaMiddleware(schemas.createCompany),
  (req, res) => companyController.create(req, res),
);

companyRouter.get('/', (req, res) => companyController.list(req, res));

companyRouter.get('/:id', (req, res) => companyController.findById(req, res));

companyRouter.put('/:id', verifyTokenMiddleware, (req, res) =>
  companyController.update(req, res),
);

companyRouter.delete('/:id', verifyTokenMiddleware, (req, res) =>
  companyController.delete(req, res),
);

export default companyRouter;
