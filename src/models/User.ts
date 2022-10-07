import { Schema, model } from 'mongoose';
import User from '../interfaces/User';

const userSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const users = model<User>('users', userSchema);

export default users;
