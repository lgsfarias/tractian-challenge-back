import { Asset } from '../interfaces';
import assets from '../models/Asset';
import { ObjectId } from 'mongodb';

export type CreateAssetData = Omit<Asset, 'unit' | 'owner'> & {
  unit: string;
  owner: string;
};

export default class AssetRepository {
  public async create(createAssetData: CreateAssetData) {
    const asset = await assets.create({
      ...createAssetData,
      unit: new ObjectId(createAssetData.unit),
      owner: new ObjectId(createAssetData.owner),
    });
    return asset._id;
  }

  public async findById(id: string) {
    const asset = await assets.findById(id);
    return asset;
  }

  public async findAll() {
    const assetsList = await assets.find();
    return assetsList;
  }

  public async update(id: string, updateAssetData: CreateAssetData) {
    const asset = await assets.findByIdAndUpdate(id, {
      ...updateAssetData,
      unit: new ObjectId(updateAssetData.unit),
      owner: new ObjectId(updateAssetData.owner),
    });
    return asset;
  }

  public async delete(id: string) {
    await assets.findByIdAndDelete(id);
  }

  public async findByUnit(unitId: string) {
    const assetsList = await assets.find({ unit: unitId }).populate('owner');
    return assetsList;
  }

  public async findByName(name: string) {
    const asset = await assets.findOne({ name }).populate('unit owner');
    return asset;
  }

  public async findByUnitAndName(unitId: string, name: string) {
    const asset = await assets
      .findOne({ unit: unitId, name })
      .populate('owner');
    return asset;
  }

  public async findByCompany(companyId: string) {
    const assetsList = await assets.find().populate({
      path: 'unit owner',
      match: { company: companyId },
    });
    return assetsList.filter((asset) => asset.unit);
  }

  //FIXME:
  public async findByCompanyAndName(companyId: string, name: string) {
    const asset = await assets.findOne({ name }).populate({
      path: 'unit owner',
      match: { company: companyId },
    });
    return asset;
  }
}
