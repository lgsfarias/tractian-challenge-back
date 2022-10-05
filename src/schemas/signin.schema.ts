import Joi from 'joi';
import User from '../interfaces/User';

type SignInSchema = Omit<User, '_id' | 'createdAt' | 'updatedAt' | 'name'>;

const signInSchema = Joi.object<SignInSchema>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export default signInSchema;
