import React from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    {
        name: 'Sun',
        pv: 2400,
    },
    {
        name: 'Mon',
        pv: 1398,
    },
    {
        name: 'Tue',
        pv: 9800,
    },
    {
        name: 'Wed',
        pv: 3908,
    },
    {
        name: 'Thu',
        pv: 4800,
    },
    {
        name: 'Fri',
        pv: 3800,
    },
    {
        name: 'Sat',
        pv: 4300,
    }
];
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip" style={{
                width: "102px",
                height: "51px", textAlign: "center",
                borderRadius: "8px",
                color: "#fff",
                border: "1px solid rgba(15, 23, 42, 0.20)",
                background: "rgba(15, 23, 42, 0.70)",
                boxShadow: " 0px 20px 40px 0px rgba(15, 23, 42, 0.15)",
                backdropFilter: "blur(4px)",
            }}>
                <p className="label">{`${label} : ${payload[0].value}`}</p>
            </div>
        );
    }

    return null;
};
const LineChartComp = () => {
    return (
        <div style={{ width: '100%' }}>
            <ResponsiveContainer width="100%" height={230}>
                <LineChart
                    strokeWidth={0.3}
                    width={"100%"}
                    data={data}
                    margin={{ top: 25, right: 10, left: -15, bottom: -5 }}
                >
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey="name" style={{ fontSize: "13px" }} />
                    <YAxis type="number" style={{ fontSize: "13px" }} domain={[0, 10000]} />
                    <Tooltip content={<CustomTooltip />} />
                    <Line type="monotone" dataKey="pv" strokeWidth={2} stroke="#2563EB" dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineChartComp;
