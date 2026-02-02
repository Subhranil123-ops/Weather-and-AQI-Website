import TimeChart from "./Chart"
import Togglers from "./Togglers"
import WeatherCards from "./WeatherCards.jsx"
import { useEffect, useState } from 'react';
import { sunny } from "../assets/weatherIcons/loader.js"
import { clear } from "../assets/weatherIcons/loader.js"
import { fog } from "../assets/weatherIcons/loader.js"
import { rain } from "../assets/weatherIcons/loader.js"
import { cloudy } from "../assets/weatherIcons/loader.js"

export default function ForcastPanel({ result, setUnit, unit, graphType, setGraphType }) {
    let state = result && result.length ? result[0].date : "";
    let [date, setDate] = useState(state);
    console.log(state);
    useEffect(() => {
        if (result && result.length) {
            setDate(result[0]?.date);
        }
    }, [result]);

    if (result && result.length) {
        let oneDayData = result.filter(el => el.date === date);
        console.log(oneDayData)
        let weather = oneDayData.map(el => el.weather);
        let arr = [];
        let s = 0;
        let cr = 0;
        let f = 0;
        let r = 0;
        let cl = 0;
        for (let i = 0; i < weather.length; i++) {
            if (weather[i] === "Sunny") {
                s++;
            } else if (weather[i] === "Clear") {
                cr++;
            } else if (weather[i] === "Fog") {
                f++;
            } else if (weather[i] === "Rain") {
                r++;
            } else if (weather[i] === "Clouds") {
                cl++;
            }
        }
        arr.push(s, cr, f, r, cl);
        let max = -1;
        for (let i = 0; i < arr.length; i++) {
            if (max <= arr[i]) max = arr[i];
        }
        let img;
        if (max === s) img = sunny;
        else if (max === cr) img = clear;
        else if (max === f) img = fog;
        else if (max === r) img = rain;
        else if (max === cl) img = cloudy;

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
                    iconWeather={img}
                />
            </div>
        )
    }
}