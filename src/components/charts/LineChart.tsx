import React from 'react';
import { Line, LineChart as RechartsLineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface DataPoint {
    name: string;
    value: number;
    [key: string]: any;
}

interface LineChartProps {
    data: DataPoint[];
    lines: Array<{
        key: string;
        color: string;
        name: string;
    }>;
    xAxisKey?: string;
    height?: number;
    formatValue?: (value: number) => string;
}

function LineChart({
                       data,
                       lines,
                       xAxisKey = 'name',
                       height = 300,
                       formatValue = (value) => value.toString()
                   }: LineChartProps) {
    return (
        <div style={{ height }}>
            <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={xAxisKey} />
                    <YAxis tickFormatter={formatValue} />
                    <Tooltip formatter={formatValue} />
                    <Legend />
                    {lines.map(({ key, color, name }) => (
                        <Line
                            key={key}
                            type="monotone"
                            dataKey={key}
                            stroke={color}
                            name={name}
                            strokeWidth={2}
                            dot={false}
                            activeDot={{ r: 8 }}
                        />
                    ))}
                </RechartsLineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default LineChart;