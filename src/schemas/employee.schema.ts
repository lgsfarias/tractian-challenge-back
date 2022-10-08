import Joi from 'joi';
import { Employee } from '../interfaces';

const employeeSchema = Joi.object<Employee>({
  name: Joi.string().required(),
  unit: Joi.string().required(),
});

export default employeeSchema;
