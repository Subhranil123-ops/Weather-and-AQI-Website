import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import "./Chart.css"

export default function TimeChart({ isAnimationActive, graphType, unit, dayForecastData }) {

    let isTemp = graphType === "temp" ? true : false;
    let unitLabel = unit === "metric" ? "°C" : "°F";
    const CustomTooltip = ({ active, payload, label }) => {
        const isVisible = active && payload && payload.length;
        return (
            <div className="custom-tooltip" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
                {isVisible && (
                    <>
                        <p><b>{payload[0]?.payload?.date}</b></p>
                        <p className="label">
                            {isTemp ? `Temp: ${payload[0]?.payload?.temp + unitLabel}` :
                                `Feels Like: ${payload[0]?.payload?.feelsLike + unitLabel}`}
                        </p>
                    </>
                )}
            </div>
        );
    };
    return (
        <div className="Chart mt-5" >
            <ResponsiveContainer width="100%" height={150}>
                <AreaChart
                    data={dayForecastData}
                >
                    <defs>
                        <linearGradient id="colorTime" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="3%" stopColor="red" stopOpacity={0.8} />
                            <stop offset="97%" stopColor="red" stopOpacity={0.0} />
                        </linearGradient>
                    </defs>
                    <Area
                        type="monotone"
                        dataKey={graphType === "temp" ? "temp" : "feelsLike"}
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
                        tickLine={false}
                        axisLine={false}
                        style={{ fontSize: "0.8rem" }}
                        label={
                            {
                                value: "Time",
                                position: "insideBottom",
                                offset: -5
                            }} />
                    <YAxis
                        dataKey={graphType === "temp" ? "temp" : "feelsLike"}
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={tick => {
                            return tick + unitLabel;
                        }}
                        style={{ fontSize: "0.8rem" }}
                        label={
                            {
                                value: graphType === "temp" ? "Temperature" : "Feels Like",
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
