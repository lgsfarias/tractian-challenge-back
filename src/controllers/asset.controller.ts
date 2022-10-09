import { Request, Response } from 'express';
import { CreateAssetData } from '../repositories/asset.repository';
import AssetService from '../services/asset.service';

export default class AssetController {
  assetService: AssetService;

  constructor() {
    this.assetService = new AssetService();
  }

  public async create(req: Request, res: Response) {
    const assetId = await this.assetService.create(req.body as CreateAssetData);
    return res.status(201).json({ id: assetId });
  }

  public async list(req: Request, res: Response) {
    const { companyId } = req.params;
    const assets = await this.assetService.findByCompany(companyId);
    return res.status(200).json(assets);
  }

  public async show(req: Request, res: Response) {
    const { id } = req.params;
    const asset = await this.assetService.findById(id);
    return res.status(200).json(asset);
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const asset = await this.assetService.update(
      id,
      req.body as CreateAssetData,
    );
    return res.status(200).json(asset);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;
    await this.assetService.delete(id);
    return res.status(204).send();
  }

  public async findByUnit(req: Request, res: Response) {
    const { id } = req.params;
    const assets = await this.assetService.findByUnit(id);
    return res.status(200).json(assets);
  }
}
