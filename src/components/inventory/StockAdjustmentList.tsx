import React from 'react';
import { format } from 'date-fns';
import { ArrowUp, ArrowDown, AlertTriangle, Clock } from 'lucide-react';
import { StockAdjustment } from '../../types/stockAdjustment';

interface StockAdjustmentListProps {
  adjustments: StockAdjustment[];
}

function StockAdjustmentList({ adjustments }: StockAdjustmentListProps) {
  const getAdjustmentTypeIcon = (type: string) => {
    switch (type) {
      case 'increase':
        return ArrowUp;
      case 'decrease':
        return ArrowDown;
      case 'damage':
        return AlertTriangle;
      case 'expiry':
        return Clock;
      default:
        return ArrowUp;
    }
  };

  const getAdjustmentTypeColor = (type: string) => {
    switch (type) {
      case 'increase':
        return 'bg-green-100 text-green-800';
      case 'decrease':
        return 'bg-red-100 text-red-800';
      case 'damage':
        return 'bg-yellow-100 text-yellow-800';
      case 'expiry':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Batch</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created By</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {adjustments.map((adjustment) => {
            const Icon = getAdjustmentTypeIcon(adjustment.type);
            return (
              <tr key={adjustment._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {format(new Date(adjustment.date), 'MMM dd, yyyy HH:mm')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{adjustment.product}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex items-center text-xs leading-5 font-semibold rounded-full ${getAdjustmentTypeColor(adjustment.type)}`}>
                    <Icon className="h-4 w-4 mr-1" />
                    {adjustment.type.toUpperCase()}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {adjustment.quantity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {adjustment.reason}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {adjustment.batchNumber || '-'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {adjustment.createdBy}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StockAdjustmentList;