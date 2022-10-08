import { ObjectId } from 'mongodb';

export interface User {
  name: string;
  email: string;
  password: string;
  company: ObjectId;
}

export interface Company {
  name: string;
}

export interface Unit {
  name: string;
  company: ObjectId;
}

export interface Employee {
  name: string;
  unit: ObjectId;
}

export interface Asset {
  image: string;
  name: string;
  description: string;
  model: string;
  owner: string;
  status: 'Running' | 'Alerting' | 'Stopped';
  healthLevel: number;
  unit: ObjectId;
}
