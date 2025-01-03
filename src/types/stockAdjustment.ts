export type AdjustmentType = 'increase' | 'decrease' | 'damage' | 'expiry';

export interface StockAdjustment {
  _id: string;
  product: string;
  type: AdjustmentType;
  quantity: number;
  reason: string;
  batchNumber?: string;
  date: string;
  createdBy: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface StockMovement {
  _id: string;
  product: string;
  type: 'in' | 'out';
  quantity: number;
  reference: {
    type: 'purchase' | 'sale' | 'adjustment';
    id: string;
  };
  batchNumber?: string;
  date: string;
  createdAt: string;
  updatedAt: string;
}