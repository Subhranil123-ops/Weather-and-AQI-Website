import TimeChart from "./Chart"
import Togglers from "./Togglers"
import WeatherCards from "./WeatherCards.jsx"
import { useState } from 'react';
export default function ForcastPanel({ result, setUnit, unit, graphType, setGraphType}) {
    let [dayForecastData, setDayForecastData] = useState([result[0]]);
    return (
        <div className="ForcastPanel">
            <Togglers
                setUnit={setUnit} unit={unit}
                graphType={graphType} setGraphType={setGraphType} />
            <TimeChart
                graphType={graphType}
                unit={unit}
                dayForecastData={dayForecastData} />
            <WeatherCards
                data={result}
                setDayForecastData={setDayForecastData} />
        </div>
    )
}