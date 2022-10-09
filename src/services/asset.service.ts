import AssetRepository, {
  CreateAssetData,
} from '../repositories/asset.repository';
import AppError from '../utils/AppError';

export default class AssetService {
  assetRepository: AssetRepository;

  constructor() {
    this.assetRepository = new AssetRepository();
  }

  public async create(createAssetData: CreateAssetData) {
    const existingAsset = await this.assetRepository.findByUnitAndName(
      createAssetData.unit,
      createAssetData.name,
    );
    if (existingAsset) {
      throw new AppError('Asset already exists', 400);
    }
    const assetId = await this.assetRepository.create(createAssetData);
    return assetId;
  }

  public async findById(id: string) {
    const asset = await this.assetRepository.findById(id);
    if (!asset) {
      throw new AppError('Asset not found', 404);
    }
    return asset;
  }

  public async list() {
    const assets = await this.assetRepository.findAll();
    return assets;
  }

  public async update(id: string, updateAssetData: CreateAssetData) {
    const asset = await this.assetRepository.update(id, updateAssetData);
    return asset;
  }

  public async delete(id: string) {
    await this.assetRepository.delete(id);
  }

  public async findByUnit(unitId: string) {
    const assets = await this.assetRepository.findByUnit(unitId);
    return assets;
  }

  public async findByCompany(companyId: string) {
    const assets = await this.assetRepository.findByCompany(companyId);
    return assets;
  }
}
