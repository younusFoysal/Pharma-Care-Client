import React from 'react';

interface TopItem {
  id: string;
  name: string;
  value: number;
  secondaryValue?: number;
}

interface TopItemsListProps {
  title: string;
  items: TopItem[];
  valuePrefix?: string;
  valueSuffix?: string;
  secondaryValuePrefix?: string;
}

function TopItemsList({ title, items, valuePrefix = '', valueSuffix = '', secondaryValuePrefix = '' }: TopItemsListProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-5 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      </div>
      <div className="divide-y divide-gray-200">
        {items.map((item, index) => (
          <div key={item.id} className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-semibold">
                  {index + 1}
                </span>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">{item.name}</p>
                  {item.secondaryValue !== undefined && (
                    <p className="text-sm text-gray-500">
                      {secondaryValuePrefix}{item.secondaryValue}
                    </p>
                  )}
                </div>
              </div>
              <p className="text-sm font-medium text-gray-900">
                {valuePrefix}{item.value}{valueSuffix}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopItemsList;