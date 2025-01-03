import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface InventoryStatusData {
    name: string;
    stock: number;
    reorderLevel: number;
}

interface InventoryStatusChartProps {
    data: InventoryStatusData[];
}

function InventoryStatusChart({ data }: InventoryStatusChartProps) {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="name"
                    interval={0}
                    angle={-45}
                    textAnchor="end"
                    height={70}
                />
                <YAxis />
                <Tooltip />
                <Bar dataKey="stock" fill="#4F46E5" name="Current Stock" />
                <Bar dataKey="reorderLevel" fill="#EF4444" name="Reorder Level" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default InventoryStatusChart;