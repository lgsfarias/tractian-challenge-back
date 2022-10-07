import Joi from 'joi';
import { CreateCompanyData } from '../repositories/company.repository';

const createCompanySchema = Joi.object<CreateCompanyData>({
  name: Joi.string().required(),
});

export default createCompanySchema;
