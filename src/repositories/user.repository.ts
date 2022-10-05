import User from '../interfaces/User';
import db from '../config/database';
import { ObjectId } from 'mongodb';

export type CreateUserData = Omit<User, '_id' | 'createdAt' | 'updatedAt'>;

export default class UserRepository {
  static async create(createUserData: CreateUserData) {
    const user = await db.collection('users').insertOne(createUserData);
    return user.insertedId;
  }

  static async findByEmail(email: string) {
    const user = await db.collection('users').findOne({ email });
    return user;
  }

  static async findById(id: string) {
    const user = await db
      .collection('users')
      .findOne({ _id: new ObjectId(id) });
    return user;
  }

  static async update(id: string, updateUserData: CreateUserData) {
    const user = await db
      .collection('users')
      .findOneAndUpdate({ _id: new ObjectId(id) }, { $set: updateUserData });
    return user;
  }
}
