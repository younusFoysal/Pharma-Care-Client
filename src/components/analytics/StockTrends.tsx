import LineChart from '../charts/LineChart.tsx';

interface StockTrend {
    date: string;
    inStock: number;
    reorderPoint: number;
}

// Add dummy data
const dummyStockTrends: StockTrend[] = [
    { date: '2023-01-01', inStock: 100, reorderPoint: 20 },
    { date: '2023-02-01', inStock: 85, reorderPoint: 20 },
    { date: '2023-03-01', inStock: 110, reorderPoint: 20 },
    { date: '2023-04-01', inStock: 95, reorderPoint: 20 },
    { date: '2023-05-01', inStock: 75, reorderPoint: 20 },
    { date: '2023-06-01', inStock: 120, reorderPoint: 20 },
];

interface StockTrendsProps {
    data: StockTrend[];
}

function StockTrends({ data }: StockTrendsProps) {
    // Use dummy data if no data is provided
    const stockData = data.length > 0 ? data : dummyStockTrends;

    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Stock Level Trends</h3>
            <LineChart
                data={stockData}
                lines={[
                    { key: 'inStock', color: '#4F46E5', name: 'In Stock' },
                    { key: 'reorderPoint', color: '#EF4444', name: 'Reorder Point' }
                ]}
                xAxisKey="date"
                formatValue={(value) => value.toString()}
            />
        </div>
    );
}

export default StockTrends;