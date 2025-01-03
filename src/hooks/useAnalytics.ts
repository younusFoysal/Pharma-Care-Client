import { useState, useEffect } from 'react';
import { api } from '../utils/api';
import { startOfDay, endOfDay, subDays, format } from 'date-fns';

export function useAnalytics(days: number = 30) {
    const [salesData, setSalesData] = useState([]);
    const [productStats, setProductStats] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchAnalytics();
    }, [days]);

    const fetchAnalytics = async () => {
        try {
            setIsLoading(true);
            const endDate = endOfDay(new Date());
            const startDate = startOfDay(subDays(endDate, days));

            const [salesResponse, productsResponse] = await Promise.all([
                api.get('/reports/sales', {
                    params: {
                        startDate: format(startDate, 'yyyy-MM-dd'),
                        endDate: format(endDate, 'yyyy-MM-dd')
                    }
                }),
                api.get('/reports/products')
            ]);

            setSalesData(salesResponse.data);
            setProductStats(productsResponse.data.products);
            setCategoryData(productsResponse.data.categories);
            setError(null);
        } catch (err) {
            setError('Failed to fetch analytics data');
        } finally {
            setIsLoading(false);
        }
    };

    return {
        salesData,
        productStats,
        categoryData,
        isLoading,
        error,
        refresh: fetchAnalytics
    };
}