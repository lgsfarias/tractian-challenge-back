import { Unit } from '../interfaces';
import units from '../models/Unit';
import { ObjectId } from 'mongodb';

export type CreateUnitData = Omit<Unit, 'company'> & { company: string };

export default class UnitRepository {
  public async create(createUnitData: CreateUnitData) {
    const unit = await units.create({
      ...createUnitData,
      company: new ObjectId(createUnitData.company),
    });
    return unit._id;
  }

  public async findById(id: string) {
    const unit = await units.findById(id);
    return unit;
  }

  public async findAll() {
    const unitsList = await units.find();
    return unitsList;
  }

  public async update(id: string, updateUnitData: CreateUnitData) {
    const unit = await units.findByIdAndUpdate(id, {
      ...updateUnitData,
      company: new ObjectId(updateUnitData.company),
    });
    return unit;
  }

  public async delete(id: string) {
    await units.findByIdAndDelete(id);
  }

  public async findByCompany(companyId: string) {
    const unitsList = await units.find({ company: companyId });
    return unitsList;
  }

  public async findByCompanyAndName(companyId: string, name: string) {
    const unit = await units.findOne({ company: companyId, name });
    return unit;
  }
}
