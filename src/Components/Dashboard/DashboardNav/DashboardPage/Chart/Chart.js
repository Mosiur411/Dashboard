import React from 'react'
import { AreaChart, Line, LineChart, YAxis, XAxis, CartesianGrid, Area, Tooltip, PieChart, Pie, Cell,   } from 'recharts'
const data1 = [
    {
        "name": "Jan",
        "uv": 4000,
        "pv": 2400,
        "amt": 2400
    },

    {
        "name": "Apr",
        "uv": 2780,
        "pv": 3908,
        "amt": 2000
    },
    {
        "name": "May",
        "uv": 1890,
        "pv": 4800,
        "amt": 2181
    },
    {
        "name": "Jun",
        "uv": 2390,
        "pv": 3800,
        "amt": 2500
    },
]
const datass = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const data = [
    {
        "name": "Jan",
        "uv": 4000,
        "pv": 2400,
        "amt": 2400
    },
    {
        "name": "Feb",
        "uv": 3000,
        "pv": 1398,
        "amt": 2210
    },
    {
        "name": "Mar",
        "uv": 2000,
        "pv": 9800,
        "amt": 2290
    },
    {
        "name": "Apr",
        "uv": 2780,
        "pv": 3908,
        "amt": 2000
    },
    {
        "name": "May",
        "uv": 1890,
        "pv": 4800,
        "amt": 2181
    },
    {
        "name": "Jun",
        "uv": 2390,
        "pv": 3800,
        "amt": 2500
    },
    {
        "name": "Jul",
        "uv": 3490,
        "pv": 4300,
        "amt": 2100
    },
    {
        "name": "Arg",
        "uv": 3490,
        "pv": 4300,
        "amt": 2100
    },
    {
        "name": "Sep",
        "uv": 3490,
        "pv": 4300,
        "amt": 2100
    },
    {
        "name": "Oct",
        "uv": 3490,
        "pv": 4300,
        "amt": 2100
    }
]
const Chart = () => {
    return (
        <div>
            <AreaChart width={630} height={250} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
        </div>
    )
}
export const LineCardChart = () => {
    return (
        <div>
            <LineChart width={260} height={180} data={data1} >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <Tooltip />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        </div>
    )
}
export const PieChartCard = () => {
    return (
        <div>
            <PieChart width={260} height={180} >
                <Pie
                    data={datass}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {datass.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                
            </PieChart>
        </div>
    )
}

export default Chart