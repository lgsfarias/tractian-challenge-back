import { Schema, model } from 'mongoose';
import { Unit } from '../interfaces';

const unitSchema = new Schema<Unit>(
  {
    name: { type: String, required: true },
    company: { type: Schema.Types.ObjectId, ref: 'companies', required: true },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

const units = model<Unit>('units', unitSchema);

export default units;
