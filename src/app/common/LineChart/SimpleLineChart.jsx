import React from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';

const generateWaveData = (numPoints, amplitude, frequency) => {
    const data = [];
    for (let i = 0; i < numPoints; i++) {
        const x = i;
        const y = amplitude * Math.sin((2 * Math.PI * frequency * i) / numPoints);
        data.push({ name: `Point ${i + 1}`, pv: y });
    }
    return data;
};

const amplitude = 10;
const frequency = 2;
const data = generateWaveData(100, amplitude, frequency);
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div
                className="custom-tooltip"
                style={{
                    width: '102px',
                    height: '51px',
                    textAlign: 'center',
                    borderRadius: '8px',
                    color: '#fff',
                    border: '1px solid rgba(15, 23, 42, 0.20)',
                    background: 'rgba(15, 23, 42, 0.70)',
                    boxShadow: '0px 20px 40px 0px rgba(15, 23, 42, 0.15)',
                    backdropFilter: 'blur(4px)',
                }}
            >
                <p className="label">{`${label} : ${payload[0].value}`}</p>
            </div>
        );
    }
    return null;
};
const SimpleLineChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={data}>
                <Tooltip content={<CustomTooltip />} />
                <Line dot={false} type="monotone" dataKey="pv" stroke="#2563eb" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    );
};
export default SimpleLineChart;
