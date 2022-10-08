import Joi from 'joi';
import { Unit } from '../interfaces';

const unitSchema = Joi.object<Unit>({
  name: Joi.string().required(),
  company: Joi.string().required(),
});

export default unitSchema;
