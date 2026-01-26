import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';


export default function TimeChart({ data, isAnimationActive }) {

    return (
        <div className="Chart" >
            <ResponsiveContainer width="100%" height={250}>
                <AreaChart
                    // style={{ width: '100%', margin:"auto", maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                    // responsive
                    data={data}
                // margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="colorTime" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="3%" stopColor="red" stopOpacity={0.8} />
                            <stop offset="97%" stopColor="red" stopOpacity={0.0} />
                        </linearGradient>
                    </defs>
                    <Area
                        type="monotone"
                        dataKey="temp"
                        stroke="#e9551b"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorTime)"
                        name="Temperature"
                    // isAnimationActive={isAnimationActive}
                    />
                    <XAxis
                        dataKey="time"
                        axisLine={false}
                        tickLine={false} />
                    <YAxis
                        dataKey="temp"
                        axisLine={false}
                        tickLine={false}
                        label={{value:"Temperature",angle: -90,position:"insideLeft"}} />
                    <Tooltip />
                    <CartesianGrid opacity={0.2} vertical={false} />
                </AreaChart>
            </ResponsiveContainer>
        </div >
    )
}
