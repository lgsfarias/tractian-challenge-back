export interface User {
  name: string;
  email: string;
  password: string;
  companies?: string[];
  createdAt: Date;
}

export interface Company {
  name: string;
  units?: string[];
  createdAt: Date;
}

export interface Unit {
  name: string;
  assets: string[];
  employees: string[];
  createdAt: Date;
}

export interface Employee {
  name: string;
  createdAt: Date;
}

export interface Asset {
  image: string;
  name: string;
  description: string;
  model: string;
  owner: string;
  status: 'Running' | 'Alerting' | 'Stopped';
  healthLevel: number;
  createdAt: Date;
}
