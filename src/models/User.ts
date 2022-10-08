import { Schema, model } from 'mongoose';
import { User } from '../interfaces';

const userSchema = new Schema<User>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    company: { type: Schema.Types.ObjectId, ref: 'companies', required: true },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

const users = model<User>('users', userSchema);

export default users;
