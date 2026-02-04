import TimeChart from "./Chart"
import Togglers from "./Togglers"
import WeatherCards from "./WeatherCards.jsx"
import { useEffect, useState } from 'react';


export default function ForcastPanel({ result, setUnit, unit, graphType, setGraphType }) {
    let state = result && result.length ? result[0].date : "";
    let [date, setDate] = useState(state);
    useEffect(() => {
        if (!date && result && result.length) {
            setDate(result[0]?.date);
        }
    }, [result]);

    if (result && result.length) {
        let oneDayData = result.filter(el => el.date === date);

        return (

            <div className="ForcastPanel">
                <Togglers
                    setUnit={setUnit} unit={unit}
                    graphType={graphType} setGraphType={setGraphType} />
                <TimeChart
                    graphType={graphType}
                    unit={unit}
                    data={oneDayData}
                />
                <WeatherCards
                    data={result}
                    unit={unit}
                    setDate={setDate}
                    oneDayData={oneDayData}
                />
            </div>
        )
    }
}