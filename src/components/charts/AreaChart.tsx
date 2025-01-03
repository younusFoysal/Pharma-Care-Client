import { AreaChart as RechartsAreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DataPoint {
    name: string;
    value: number;
}

interface AreaChartProps {
    data: DataPoint[];
    areaKey: string;
    color: string;
    height?: number;
    formatValue?: (value: number) => string;
}

function AreaChart({
                       data,
                       areaKey,
                       color,
                       height = 300,
                       formatValue = (value) => value.toString()
                   }: AreaChartProps) {
    return (
        <div style={{ height }}>
            <ResponsiveContainer width="100%" height="100%">
                <RechartsAreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={formatValue} />
                    <Tooltip formatter={formatValue} />
                    <Area
                        type="monotone"
                        dataKey={areaKey}
                        stroke={color}
                        fill={color}
                        fillOpacity={0.3}
                    />
                </RechartsAreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default AreaChart;