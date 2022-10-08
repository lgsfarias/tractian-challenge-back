import UnitRepository, {
  CreateUnitData,
} from '../repositories/unit.repository';
import AppError from '../utils/AppError';

export default class UnitService {
  unitRepository: UnitRepository;

  constructor() {
    this.unitRepository = new UnitRepository();
  }

  public async create(createUnitData: CreateUnitData) {
    const existingUnit = await this.unitRepository.findByCompanyAndName(
      createUnitData.company,
      createUnitData.name,
    );
    if (existingUnit) {
      throw new AppError('Unit already exists', 400);
    }
    const unitId = await this.unitRepository.create(createUnitData);
    return unitId;
  }

  public async findById(id: string) {
    const unit = await this.unitRepository.findById(id);
    if (!unit) {
      throw new AppError('Unit not found', 404);
    }
    return unit;
  }

  public async list() {
    const units = await this.unitRepository.findAll();
    return units;
  }

  public async update(id: string, updateUnitData: CreateUnitData) {
    const unit = await this.unitRepository.update(id, updateUnitData);
    return unit;
  }

  public async delete(id: string) {
    await this.unitRepository.delete(id);
  }

  public async findByCompany(companyId: string) {
    const units = await this.unitRepository.findByCompany(companyId);
    return units;
  }
}
