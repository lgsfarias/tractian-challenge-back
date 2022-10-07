import { Schema, model } from 'mongoose';
import { User } from '../interfaces';

const userSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  companies: [{ type: Schema.Types.ObjectId, ref: 'companies', default: [] }],
  createdAt: { type: Date, default: Date.now },
});

const users = model<User>('users', userSchema);

export default users;
