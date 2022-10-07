import UserRepository, {
  CreateUserData,
} from '../repositories/user.repository';
import AppError from '../utils/AppError';
import * as AuthUtils from '../utils/auth';

export default class UserService {
  userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  public async create(createUserData: CreateUserData) {
    await this.verifyIfUserExists(createUserData.email);
    const hashedPassword = AuthUtils.encryptPassword(createUserData.password);
    const userId = await this.userRepository.create({
      ...createUserData,
      password: hashedPassword,
    });
    return userId;
  }

  async findByEmail(email: string) {
    return this.userRepository.findByEmail(email);
  }

  async findById(id: string) {
    return this.userRepository.findById(id);
  }

  async update(id: string, updateUserData: CreateUserData) {
    return this.userRepository.update(id, updateUserData);
  }

  public async addCompany(userId: string, companyId: string) {
    const userNow = await this.userRepository.findById(userId);
    const hasCompany = userNow?.companies?.includes(companyId);
    if (hasCompany) {
      throw new AppError('This company is under your management already', 400);
    }
    const user = await this.userRepository.addCompany(userId, companyId);
    return user;
  }

  async verifyPassword(password: string, hashedPassword: string) {
    return AuthUtils.verifyPassword(password, hashedPassword);
  }

  async verifyIfUserExists(email: string) {
    const user = await this.userRepository.findByEmail(email);
    if (user) {
      throw new AppError('User already exists', 400);
    }
  }

  public async verifyCredentials(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new AppError('Invalid credentials', 401);
    }
    const isPasswordValid = await this.verifyPassword(password, user.password);
    if (!isPasswordValid) {
      throw new AppError('Invalid credentials', 401);
    }
    return user;
  }

  public generateToken(userId: string) {
    return AuthUtils.generateToken(userId);
  }

  public async showData(id: string) {
    const user = await this.userRepository.showData(id);
    return user;
  }
}
