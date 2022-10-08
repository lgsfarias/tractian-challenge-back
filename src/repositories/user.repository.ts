import { User } from '../interfaces';
import users from '../models/User';
import { ObjectId } from 'mongodb';

export type CreateUserData = Omit<User, 'company'> & {
  company: string;
};

export default class UserRepository {
  public async create(createUserData: CreateUserData) {
    const user = await users.create({
      ...createUserData,
      company: new ObjectId(createUserData.company),
    });
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

  public async showData(id: string) {
    const user = await users
      .findById(id)
      .populate('company')
      .select('-password');
    return user;
  }

  public async findAndPopulateCompanies(userId: string) {
    const user = await users.findById(userId).populate('companies');
    return user;
  }

  public async update(id: string, updateUserData: CreateUserData) {
    const user = await users.findByIdAndUpdate(id, {
      ...updateUserData,
      company: new ObjectId(updateUserData.company),
    });
    return user;
  }
}
