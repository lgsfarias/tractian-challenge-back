import { Schema, model } from 'mongoose';
import { Employee } from '../interfaces';

const employeeSchema = new Schema<Employee>(
  {
    name: { type: String, required: true, unique: true },
    unit: { type: Schema.Types.ObjectId, ref: 'units' },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

const employees = model<Employee>('employees', employeeSchema);

export default employees;
