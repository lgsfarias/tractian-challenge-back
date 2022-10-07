import User from '../interfaces/User';
import users from '../models/User';

export type CreateUserData = Omit<User, 'createdAt'>;

export default class UserRepository {
  public async create(createUserData: CreateUserData) {
    const user = await users.create(createUserData);
    return user._id;
  }

  public async findByEmail(email: string) {
    const user = await users.findOne({ email });
    return user;
  }

  public async findById(id: string) {
    const user = await users.findById(id);
    return user;
  }

  public async update(id: string, updateUserData: CreateUserData) {
    const user = await users.findByIdAndUpdate(id, updateUserData);
    return user;
  }
}
