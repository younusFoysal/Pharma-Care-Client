import React from 'react';
import AreaChart from '../charts/AreaChart';

interface RevenueData {
    date: string;
    revenue: number;
}

interface RevenueAnalysisProps {
    data: RevenueData[];
}

function RevenueAnalysis({ data }: RevenueAnalysisProps) {
    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue Analysis</h3>
            <AreaChart
                data={data}
                areaKey="revenue"
                color="#4F46E5"
                formatValue={(value) => `$${value}`}
            />
        </div>
    );
}

export default RevenueAnalysis;