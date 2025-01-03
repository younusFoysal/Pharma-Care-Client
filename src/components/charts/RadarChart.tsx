import { Radar, RadarChart as RechartsRadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

interface DataPoint {
    subject: string;
    value: number;
    fullMark: number;
}

interface RadarChartProps {
    data: DataPoint[];
    color?: string;
    height?: number;
}

function RadarChart({
                        data,
                        color = '#8884d8',
                        height = 300
                    }: RadarChartProps) {
    return (
        <div style={{ height }}>
            <ResponsiveContainer width="100%" height="100%">
                <RechartsRadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 'auto']} />
                    <Radar
                        name="Value"
                        dataKey="value"
                        stroke={color}
                        fill={color}
                        fillOpacity={0.6}
                    />
                </RechartsRadarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default RadarChart;