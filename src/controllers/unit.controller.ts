import { Request, Response } from 'express';
import UnitService from '../services/unit.service';

export default class UnitController {
  unitService: UnitService;

  constructor() {
    this.unitService = new UnitService();
  }

  public async create(req: Request, res: Response) {
    const { name, company } = req.body;
    const unitId = await this.unitService.create({ name, company });
    return res.status(201).json({ id: unitId });
  }

  public async list(req: Request, res: Response) {
    const units = await this.unitService.list();
    return res.status(200).json(units);
  }

  public async show(req: Request, res: Response) {
    const { id } = req.params;
    const unit = await this.unitService.findById(id);
    return res.status(200).json(unit);
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, company } = req.body;
    const unit = await this.unitService.update(id, { name, company });
    return res.status(200).json(unit);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;
    await this.unitService.delete(id);
    return res.status(204).send();
  }

  public async findByCompany(req: Request, res: Response) {
    const { id } = req.params;
    const units = await this.unitService.findByCompany(id);
    return res.status(200).json(units);
  }
}
