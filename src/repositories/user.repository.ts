import User from '../interfaces/User';
import db from '../config/database';
import { ObjectId } from 'mongodb';

export type CreateUserData = Omit<User, '_id' | 'createdAt' | 'updatedAt'>;

export default class UserRepository {
  public async create(createUserData: CreateUserData) {
    const user = await db.collection('users').insertOne(createUserData);
    return user.insertedId;
  }

  public async findByEmail(email: string) {
    const user = await db.collection('users').findOne({ email });
    return user;
  }

  public async findById(id: string) {
    const user = await db
      .collection('users')
      .findOne({ _id: new ObjectId(id) });
    return user;
  }

  public async update(id: string, updateUserData: CreateUserData) {
    const user = await db
      .collection('users')
      .findOneAndUpdate({ _id: new ObjectId(id) }, { $set: updateUserData });
    return user;
  }
}
