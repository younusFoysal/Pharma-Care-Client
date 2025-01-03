export interface Customer {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  healthInfo?: {
    allergies: string[];
    conditions: string[];
    medications: string[];
  };
  dateOfBirth?: string;
  gender?: 'male' | 'female' | 'other';
  insuranceInfo?: {
    provider: string;
    policyNumber: string;
  };
  createdAt: string;
  updatedAt: string;
}