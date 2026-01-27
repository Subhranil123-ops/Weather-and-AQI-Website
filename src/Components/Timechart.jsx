import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import "./Timechart.css"

const CustomTooltip = ({ active, payload, label }) => {
    const isVisible = active && payload && payload.length;
    let day = "";
    if (isVisible) {
        let payloadDate = payload[0]?.payload?.date;
        let date = new Date(payloadDate);
        let formater = new Intl.DateTimeFormat("en-US", {
            weekday: "short",
            month: "short",
            day: "2-digit"
        })
        day = formater.format(date);
    }
    return (
        <div className="custom-tooltip" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
            {isVisible && (
                <>
                    <p><b>{day}</b></p>
                    <p className="label">{`Temp: ${payload[0]?.payload?.temp}`}</p>
                </>
            )}
        </div>
    );
};

export default function TimeChart({ data,isAnimationActive }) {
    return (
        <div className="Chart mt-5" >
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
                        isAnimationActive={isAnimationActive}
                        activeDot={false}
                    />
                    <XAxis
                        dataKey="time"
                        axisLine={false}
                        tickLine={false}
                        style={{ fontSize: "0.8rem" }}
                        label={
                            {
                                value: "Time",
                                position: "insideBottom",
                                offset: -5
                            }} />
                    <YAxis
                        dataKey="temp"
                        axisLine={false}
                        tickLine={false}
                        style={{ fontSize: "0.8rem" }}
                        label={
                            {
                                value: "Temperature",
                                angle: -90,
                                position: "insideLeft",
                                textAnchor: 'middle'
                            }} />
                    <Tooltip cursor={
                        { strokeDasharray: "3 3" }}
                        content={CustomTooltip}
                        isAnimationActive={isAnimationActive}
                        animationEasing={"ease-in-out"} />
                    <CartesianGrid opacity={0.2} vertical={false} />
                </AreaChart>
            </ResponsiveContainer>
        </div >
    )
}
