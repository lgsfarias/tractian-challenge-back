import { Schema, model } from 'mongoose';
import { Company } from '../interfaces';

const companySchema = new Schema<Company>({
  name: { type: String, required: true, unique: true },
  units: [{ type: Schema.Types.ObjectId, ref: 'units', default: [] }],
});

const companies = model<Company>('companies', companySchema);

export default companies;
