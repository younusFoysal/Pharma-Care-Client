export interface Product {
  _id: string;
  name: string;
  description?: string;
  category: string;
  price: number;
  cost: number;
  stock: number;
  manufacturer?: string;
  expiryDate?: string;
  batchNumber?: string;
  reorderLevel: number;
  createdAt: string;
  updatedAt: string;
}