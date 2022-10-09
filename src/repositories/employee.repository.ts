import { Employee } from '../interfaces';
import employees from '../models/Employee';
import { ObjectId } from 'mongodb';

export type CreateEmployeeData = Omit<Employee, 'unit'> & { unit: string };

export default class EmployeeRepository {
  public async create(createEmployeeData: CreateEmployeeData) {
    const employee = await employees.create({
      ...createEmployeeData,
      unit: new ObjectId(createEmployeeData.unit),
    });
    return employee._id;
  }

  public async findById(id: string) {
    const employee = await employees.findById(id);
    return employee;
  }

  public async findAll() {
    const employeesList = await employees.find();
    return employeesList;
  }

  public async update(id: string, updateEmployeeData: CreateEmployeeData) {
    const employee = await employees.findByIdAndUpdate(id, {
      ...updateEmployeeData,
      unit: new ObjectId(updateEmployeeData.unit),
    });
    return employee;
  }

  public async delete(id: string) {
    await employees.findByIdAndDelete(id);
  }

  public async findByUnit(unitId: string) {
    const employeesList = await employees.find({ unit: unitId });
    return employeesList;
  }

  public async findByName(name: string) {
    const employee = await employees.findOne({ name });
    return employee;
  }

  public async findByUnitAndName(unitId: string, name: string) {
    const employee = await employees.findOne({ unit: unitId, name });
    return employee;
  }

  public async findByCompany(companyId: string) {
    const employeesList = await employees.find().populate({
      path: 'unit',
      match: { company: companyId },
    });
    return employeesList.filter((employee) => employee.unit);
  }

  // FIXME:
  public async findByCompanyAndName(companyId: string, name: string) {
    const employee = await employees.findOne().populate({
      path: 'unit',
      match: { company: companyId },
    });
    return employee;
  }
}
