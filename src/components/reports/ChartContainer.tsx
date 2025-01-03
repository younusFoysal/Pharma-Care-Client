import React, { ReactNode } from 'react';

interface ChartContainerProps {
  title: string;
  children: ReactNode;
  description?: string;
}

function ChartContainer({ title, children, description }: ChartContainerProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-5 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        {description && (
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        )}
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}

export default ChartContainer;