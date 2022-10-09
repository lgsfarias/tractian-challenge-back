import { Router } from 'express';
import AssetController from '../controllers/asset.controller';
import validateSchemaMiddleware from '../middlewares/validadeSchemaMiddleware';
import verifyTokenMiddleware from '../middlewares/verifyTokenMiddleware';
import * as schemas from '../schemas';

const assetController = new AssetController();
const assetRouter = Router();

assetRouter.post(
  '/',
  verifyTokenMiddleware,
  validateSchemaMiddleware(schemas.assetSchema),
  (req, res) => assetController.create(req, res),
);

assetRouter.get('/by-company/:companyId', verifyTokenMiddleware, (req, res) =>
  assetController.list(req, res),
);

assetRouter.get('/by-unit/:id', verifyTokenMiddleware, (req, res) =>
  assetController.findByUnit(req, res),
);

assetRouter.get('/:id', verifyTokenMiddleware, (req, res) =>
  assetController.show(req, res),
);

assetRouter.put(
  '/:id',
  verifyTokenMiddleware,
  validateSchemaMiddleware(schemas.assetSchema),
  (req, res) => assetController.update(req, res),
);

assetRouter.delete('/:id', verifyTokenMiddleware, (req, res) =>
  assetController.delete(req, res),
);

export default assetRouter;
