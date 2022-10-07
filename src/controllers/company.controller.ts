import { Request, Response } from 'express';
import CompanyService from '../services/company.service';

export default class CompanyController {
  companyService: CompanyService;

  constructor() {
    this.companyService = new CompanyService();
  }

  public async create(req: Request, res: Response) {
    const { name } = req.body;
    const companyId = await this.companyService.create({ name });
    return res.status(201).json({ id: companyId });
  }

  public async list(req: Request, res: Response) {
    const companies = await this.companyService.list();
    return res.status(200).json(companies);
  }

  public async findById(req: Request, res: Response) {
    const { id } = req.params;
    const company = await this.companyService.findById(id);
    return res.status(200).json(company);
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name } = req.body;
    const company = await this.companyService.update(id, { name });
    return res.status(200).json(company);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;
    await this.companyService.delete(id);
    return res.status(204).json();
  }
}
