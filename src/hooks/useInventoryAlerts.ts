import { useState, useEffect } from 'react';
import { api } from '../utils/api';
import { Product } from '../types/product';

export function useInventoryAlerts() {
  const [lowStockProducts, setLowStockProducts] = useState<Product[]>([]);
  const [expiringProducts, setExpiringProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAlerts = async () => {
    try {
      const [lowStockResponse, expiringResponse] = await Promise.all([
        api.get('/products/alerts/low-stock'),
        api.get('/products/alerts/expiring')
      ]);
      
      setLowStockProducts(lowStockResponse.data);
      setExpiringProducts(expiringResponse.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch inventory alerts');
    } finally {
      setIsLoading(false);
    }
  };

  const updateReorderLevel = async (productId: string, newThreshold: number) => {
    try {
      await api.patch(`/products/${productId}/reorder-level`, { reorderLevel: newThreshold });
      await fetchAlerts();
    } catch (err) {
      setError('Failed to update reorder level');
    }
  };

  useEffect(() => {
    fetchAlerts();
  }, []);

  return {
    lowStockProducts,
    expiringProducts,
    isLoading,
    error,
    updateReorderLevel,
    refresh: fetchAlerts
  };
}