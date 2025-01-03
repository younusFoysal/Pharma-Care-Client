import React from 'react';
// @ts-ignore
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';

interface SalesTrendData {
    date: string;
    revenue: number;
}

interface SalesTrendChartProps {
    data: SalesTrendData[];
}

function SalesTrendChart({ data }: SalesTrendChartProps) {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="date"
                    tickFormatter={(date) => format(new Date(date), 'MMM dd')}
                />
                <YAxis
                    tickFormatter={(value) => `$${value}`}
                />
                <Tooltip
                    formatter={(value: number) => [`$${value.toFixed(2)}`, 'Revenue']}
                    labelFormatter={(date) => format(new Date(date), 'MMM dd, yyyy')}
                />
                <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#4F46E5"
                    strokeWidth={2}
                    dot={false}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default SalesTrendChart;