import { Company } from '../interfaces';
import companies from '../models/Company';

export type CreateCompanyData = Company;

export default class CompanyRepository {
  public async create(createCompanyData: CreateCompanyData) {
    const company = await companies.create(createCompanyData);
    return company._id;
  }

  public async findById(id: string) {
    const company = await companies.findById(id);
    return company;
  }

  public async findAll() {
    const companiesList = await companies.find();
    return companiesList;
  }

  public async update(id: string, updateCompanyData: CreateCompanyData) {
    const company = await companies.findByIdAndUpdate(id, updateCompanyData);
    return company;
  }

  public async delete(id: string) {
    await companies.findByIdAndDelete(id);
  }
}
