import { Product } from './product';
import { Supplier } from './supplier';
import { User } from './user';

export interface PurchaseOrderItem {
  product: Product;
  quantity: number;
  unitCost: number;
  subtotal: number;
}

export interface PurchaseOrder {
  _id: string;
  orderNumber: string;
  supplier: Supplier;
  items: PurchaseOrderItem[];
  status: 'draft' | 'ordered' | 'received' | 'cancelled';
  totalAmount: number;
  expectedDeliveryDate?: string;
  receivedDate?: string;
  notes?: string;
  createdBy: User;
  createdAt: string;
  updatedAt: string;
}