import CompanyRepository, {
  CreateCompanyData,
} from '../repositories/company.repository';
import AppError from '../utils/AppError';

export default class CompanyService {
  companyRepository: CompanyRepository;

  constructor() {
    this.companyRepository = new CompanyRepository();
  }

  public async create(createCompanyData: CreateCompanyData) {
    const companyId = await this.companyRepository.create(createCompanyData);
    return companyId;
  }

  public async findById(id: string) {
    const company = await this.companyRepository.findById(id);
    if (!company) {
      throw new AppError('Company not found', 404);
    }
    return company;
  }

  public async list() {
    const companies = await this.companyRepository.findAll();
    return companies;
  }

  public async update(id: string, updateCompanyData: CreateCompanyData) {
    const company = await this.companyRepository.update(id, updateCompanyData);
    return company;
  }

  public async delete(id: string) {
    await this.companyRepository.delete(id);
  }
}
