import Joi from 'joi';
import { User } from '../interfaces';

type SignInSchema = Omit<User, 'name'>;

const signInSchema = Joi.object<SignInSchema>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export default signInSchema;
