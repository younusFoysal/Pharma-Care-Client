import  { useState } from 'react';
import { useAnalytics } from '../hooks/useAnalytics';
import SalesAnalytics from '../components/analytics/SalesAnalytics';
import ProductPerformance from '../components/analytics/ProductPerformance';
import CategoryDistribution from '../components/analytics/CategoryDistribution';

function Analytics() {
    const [period, setPeriod] = useState<'daily' | 'weekly' | 'monthly'>('daily');
    const { salesData, productStats, categoryData, isLoading, error } = useAnalytics();

    if (error) {
        return <div className="bg-red-50 p-4 rounded-md text-red-700">{error}</div>;
    }

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>
                <select
                    value={period}
                    onChange={(e) => setPeriod(e.target.value as typeof period)}
                    className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                </select>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <SalesAnalytics data={salesData} period={period} />
                <CategoryDistribution data={categoryData} />
            </div>

            <ProductPerformance products={productStats} />
        </div>
    );
}

export default Analytics;