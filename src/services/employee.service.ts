import EmployeeRepository, {
  CreateEmployeeData,
} from '../repositories/employee.repository';
import AppError from '../utils/AppError';

export default class EmployeeService {
  employeeRepository: EmployeeRepository;

  constructor() {
    this.employeeRepository = new EmployeeRepository();
  }

  public async create(createEmployeeData: CreateEmployeeData) {
    const existingEmployee = await this.employeeRepository.findByName(
      createEmployeeData.name,
    );
    if (existingEmployee) {
      throw new AppError('Employee already exists', 400);
    }
    const employeeId = await this.employeeRepository.create(createEmployeeData);
    return employeeId;
  }

  public async findById(id: string) {
    const employee = await this.employeeRepository.findById(id);
    if (!employee) {
      throw new AppError('Employee not found', 404);
    }
    return employee;
  }

  public async list() {
    const employees = await this.employeeRepository.findAll();
    return employees;
  }

  public async update(id: string, updateEmployeeData: CreateEmployeeData) {
    const employee = await this.employeeRepository.update(
      id,
      updateEmployeeData,
    );
    return employee;
  }

  public async delete(id: string) {
    const employeeAssets = await this.employeeRepository.findAssetsByEmployee(
      id,
    );
    if (employeeAssets.length > 0) {
      throw new AppError(
        'Employee has assets assigned. Please remove them before deleting',
        400,
      );
    }
    await this.employeeRepository.delete(id);
  }

  public async findByUnit(unitId: string) {
    const employees = await this.employeeRepository.findByUnit(unitId);
    return employees;
  }

  public async findByCompany(companyId: string) {
    const employees = await this.employeeRepository.findByCompany(companyId);
    return employees;
  }
}
