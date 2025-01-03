import React from 'react';
import RadarChart from '../charts/RadarChart';

interface ProductMetric {
    subject: string;
    value: number;
    fullMark: number;
}

interface ProductMetricsProps {
    data: ProductMetric[];
}

function ProductMetrics({ data }: ProductMetricsProps) {
    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Product Performance Metrics</h3>
            <RadarChart data={data} color="#4F46E5" />
        </div>
    );
}

export default ProductMetrics;