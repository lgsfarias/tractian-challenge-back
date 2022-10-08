import Joi from 'joi';
import { CreateUserData } from '../repositories/user.repository';

type SignUpSchema = CreateUserData & {
  confirmPassword: string;
};

const signUpSchema = Joi.object<SignUpSchema>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
  company: Joi.string().required(),
  name: Joi.string().required(),
});

export default signUpSchema;
