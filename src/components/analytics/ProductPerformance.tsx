import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface ProductStats {
    id: string;
    name: string;
    sales: number;
    revenue: number;
    growth: number;
    stock: number;
}

interface ProductPerformanceProps {
    products: ProductStats[];
}

function ProductPerformance({ products }: ProductPerformanceProps) {
    return (
        <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Product Performance</h3>
            </div>
            <div className="divide-y divide-gray-200">
                {products.map((product) => (
                    <div key={product.id} className="px-6 py-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="text-sm font-medium text-gray-900">{product.name}</h4>
                                <div className="mt-1 flex items-center space-x-4 text-sm text-gray-500">
                                    <span>Sales: {product.sales}</span>
                                    <span>Revenue: ${product.revenue}</span>
                                    <span>Stock: {product.stock}</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    product.growth >= 0
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                }`}>
                  {product.growth >= 0 ? (
                      <TrendingUp className="w-4 h-4 mr-1" />
                  ) : (
                      <TrendingDown className="w-4 h-4 mr-1" />
                  )}
                    {Math.abs(product.growth)}%
                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductPerformance;