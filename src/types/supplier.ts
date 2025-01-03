export interface Address {
  street?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
}

export interface Supplier {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: Address;
  contactPerson?: string;
  taxId?: string;
  status: 'active' | 'inactive';
  notes?: string;
  createdAt: string;
  updatedAt: string;
}