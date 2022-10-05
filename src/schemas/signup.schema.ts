import Joi from 'joi';
import User from '../interfaces/User';

type SignUpSchema = Omit<User, '_id' | 'createdAt' | 'updatedAt'> & {
  confirmPassword: string;
};

const signUpSchema = Joi.object<SignUpSchema>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
  name: Joi.string().required(),
});

export default signUpSchema;
