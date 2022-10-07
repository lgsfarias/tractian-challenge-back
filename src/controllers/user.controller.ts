import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public async signup(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const userId = await this.userService.create({ name, email, password });
    return res.status(201).json({ id: userId });
  }

  public async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await this.userService.verifyCredentials(email, password);
    const token = this.userService.generateToken(user.id);
    return res.status(200).json({ token });
  }

  public async addCompany(req: Request, res: Response) {
    const { companyId } = req.body;
    const { user } = res.locals;
    const send = await this.userService.addCompany(user.id, companyId);
    return res.status(200).json(send);
  }
}
