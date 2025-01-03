import { useState, useEffect } from 'react';
import { api } from '../utils/api';
import { format, eachDayOfInterval, startOfDay, endOfDay } from 'date-fns';

export function useReportData(startDate: string, endDate: string) {
    const [salesTrendData, setSalesTrendData] = useState([]);
    const [inventoryStatusData, setInventoryStatusData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchReportData();
    }, [startDate, endDate]);

    const fetchReportData = async () => {
        try {
            setIsLoading(true);
            const [salesResponse, productsResponse] = await Promise.all([
                api.get('/sales'),
                api.get('/products')
            ]);

            // Process sales trend data
            const dateRange = eachDayOfInterval({
                start: new Date(startDate),
                end: new Date(endDate)
            });

            const salesByDate = salesResponse.data.reduce((acc: any, sale: any) => {
                const date = format(new Date(sale.date), 'yyyy-MM-dd');
                acc[date] = (acc[date] || 0) + sale.total;
                return acc;
            }, {});

            const trendData = dateRange.map(date => ({
                date: format(date, 'yyyy-MM-dd'),
                revenue: salesByDate[format(date, 'yyyy-MM-dd')] || 0
            }));

            // Process inventory status data
            const inventoryData = productsResponse.data
                .sort((a: any, b: any) => b.stock - a.stock)
                .slice(0, 10)
                .map((product: any) => ({
                    name: product.name,
                    stock: product.stock,
                    reorderLevel: product.reorderLevel
                }));

            setSalesTrendData(trendData);
            setInventoryStatusData(inventoryData);
            setError(null);
        } catch (err) {
            setError('Failed to fetch report data');
        } finally {
            setIsLoading(false);
        }
    };

    return {
        salesTrendData,
        inventoryStatusData,
        isLoading,
        error,
        refresh: fetchReportData
    };
}