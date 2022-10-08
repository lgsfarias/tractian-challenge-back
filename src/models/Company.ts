import { Schema, model } from 'mongoose';
import { Company } from '../interfaces';

const companySchema = new Schema<Company>(
  {
    name: { type: String, required: true, unique: true },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

const companies = model<Company>('companies', companySchema);

export default companies;
