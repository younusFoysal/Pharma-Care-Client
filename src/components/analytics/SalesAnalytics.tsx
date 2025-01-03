import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';

interface SalesData {
    date: string;
    revenue: number;
    orders: number;
}

interface SalesAnalyticsProps {
    data: SalesData[];
    period: 'daily' | 'weekly' | 'monthly';
}

function SalesAnalytics({ data, period }: SalesAnalyticsProps) {
    const formatDate = (date: string) => {
        switch (period) {
            case 'daily':
                return format(new Date(date), 'MMM dd');
            case 'weekly':
                return `Week ${format(new Date(date), 'w')}`;
            case 'monthly':
                return format(new Date(date), 'MMM yyyy');
            default:
                return date;
        }
    };

    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Sales Overview</h3>
            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" tickFormatter={formatDate} />
                        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                        <Tooltip
                            labelFormatter={formatDate}
                            formatter={(value: number, name: string) => [
                                name === 'revenue' ? `$${value}` : value,
                                name === 'revenue' ? 'Revenue' : 'Orders'
                            ]}
                        />
                        <Bar yAxisId="left" dataKey="revenue" fill="#8884d8" name="Revenue" />
                        <Bar yAxisId="right" dataKey="orders" fill="#82ca9d" name="Orders" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default SalesAnalytics;