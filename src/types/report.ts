export interface SalesMetrics {
  totalSales: number;
  totalRevenue: number;
  averageOrderValue: number;
  topSellingProducts: {
    productId: string;
    name: string;
    quantity: number;
    revenue: number;
  }[];
}

export interface InventoryMetrics {
  totalProducts: number;
  lowStockProducts: number;
  outOfStockProducts: number;
  expiringProducts: number;
  totalValue: number;
}

export interface CustomerMetrics {
  totalCustomers: number;
  newCustomers: number;
  activeCustomers: number;
  topCustomers: {
    customerId: string;
    name: string;
    totalPurchases: number;
    totalSpent: number;
  }[];
}

export interface PurchaseMetrics {
  totalPurchases: number;
  totalCost: number;
  pendingOrders: number;
  topSuppliers: {
    supplierId: string;
    name: string;
    orderCount: number;
    totalAmount: number;
  }[];
}