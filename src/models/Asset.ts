import { Schema, model } from 'mongoose';
import { Asset } from '../interfaces';

const assetSchema = new Schema<Asset>(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    model: { type: String, required: true },
    status: {
      type: String,
      enum: ['Running', 'Alerting', 'Stopped'],
      default: 'Running',
    },
    healthLevel: { type: Number, min: 0, max: 100, default: 100 },
    unit: { type: Schema.Types.ObjectId, ref: 'units', required: true },
    owner: { type: Schema.Types.ObjectId, ref: 'employees', required: true },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

const assets = model<Asset>('assets', assetSchema);

export default assets;
