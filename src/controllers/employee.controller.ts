import { Request, Response } from 'express';
import EmployeeService from '../services/employee.service';

export default class EmployeeController {
  employeeService: EmployeeService;

  constructor() {
    this.employeeService = new EmployeeService();
  }

  public async create(req: Request, res: Response) {
    const { name, unit } = req.body;
    const employeeId = await this.employeeService.create({ name, unit });
    return res.status(201).json({ id: employeeId });
  }

  public async list(req: Request, res: Response) {
    const { companyId } = req.params;
    const employees = await this.employeeService.findByCompany(companyId);
    return res.status(200).json(employees);
  }

  public async show(req: Request, res: Response) {
    const { id } = req.params;
    const employee = await this.employeeService.findById(id);
    return res.status(200).json(employee);
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, unit } = req.body;
    const employee = await this.employeeService.update(id, { name, unit });
    return res.status(200).json(employee);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;
    await this.employeeService.delete(id);
    return res.status(204).send();
  }

  public async findByUnit(req: Request, res: Response) {
    const { id } = req.params;
    const employees = await this.employeeService.findByUnit(id);
    return res.status(200).json(employees);
  }
}
