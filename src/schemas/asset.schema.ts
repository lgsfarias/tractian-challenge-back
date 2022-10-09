import Joi from 'joi';
import { Asset } from '../interfaces';

const assetSchema = Joi.object<Asset>({
  image: Joi.string().uri().required(),
  name: Joi.string().required(),
  model: Joi.string().required(),
  description: Joi.string().required(),
  status: Joi.string()
    .valid('Running', 'Alerting', 'Stopped')
    .default('Running'),
  healthLevel: Joi.number().min(0).max(100).default(100),
  unit: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required(),
  owner: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required(),
});

export default assetSchema;
