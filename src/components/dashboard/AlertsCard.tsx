import React from 'react';
import { AlertTriangle, Clock } from 'lucide-react';
import { Product } from '../../types/product';

interface AlertsCardProps {
  lowStockProducts: Product[];
  expiringProducts: Product[];
  onThresholdChange: (productId: string, newThreshold: number) => Promise<void>;
}

function AlertsCard({ lowStockProducts, expiringProducts, onThresholdChange }: AlertsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Inventory Alerts</h2>
      
      {/* Low Stock Alerts */}
      <div className="mb-6">
        <div className="flex items-center text-amber-600 mb-2">
          <AlertTriangle className="h-5 w-5 mr-2" />
          <h3 className="font-medium">Low Stock Alerts</h3>
        </div>
        {lowStockProducts.length > 0 ? (
          <div className="space-y-3">
            {lowStockProducts.map((product) => (
              <div key={product._id} className="flex items-center justify-between bg-amber-50 p-3 rounded-md">
                <div>
                  <p className="text-sm font-medium text-gray-900">{product.name}</p>
                  <p className="text-sm text-gray-500">Current Stock: {product.stock}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <label className="text-sm text-gray-600">Alert at:</label>
                  <input
                    type="number"
                    min="0"
                    value={product.reorderLevel}
                    onChange={(e) => onThresholdChange(product._id, parseInt(e.target.value))}
                    className="w-20 px-2 py-1 text-sm border rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">No low stock items</p>
        )}
      </div>

      {/* Expiring Products */}
      <div>
        <div className="flex items-center text-orange-600 mb-2">
          <Clock className="h-5 w-5 mr-2" />
          <h3 className="font-medium">Expiring Products (Next 6 Months)</h3>
        </div>
        {expiringProducts.length > 0 ? (
          <div className="space-y-3">
            {expiringProducts.map((product) => (
              <div key={product._id} className="flex items-center justify-between bg-orange-50 p-3 rounded-md">
                <div>
                  <p className="text-sm font-medium text-gray-900">{product.name}</p>
                  <p className="text-sm text-gray-500">
                    Expires: {new Date(product.expiryDate!).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-sm text-gray-600">
                  Stock: {product.stock}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">No products expiring soon</p>
        )}
      </div>
    </div>
  );
}

export default AlertsCard;