import WeatherCard from "./WeatherCard"
import "./WeatherCards.css"
import { sunny } from "../assets/weatherIcons/loader.js"
import { clear } from "../assets/weatherIcons/loader.js"
import { fog } from "../assets/weatherIcons/loader.js"
import { rain } from "../assets/weatherIcons/loader.js"
import { cloudy } from "../assets/weatherIcons/loader.js"

export default function WeatherCards({ data, unit, setDate, iconWeather, oneDayData }) {

    let units = unit === "metric" ? "°C" : "°F";
    let groupedByDate = {};
    data.forEach(el => {
        const date = el.date;
        if (!groupedByDate[date]) {
            groupedByDate[date] = {
                temp: [],
                feelsLike: []
            }
        }
        groupedByDate[date].temp.push(el.temp);
        groupedByDate[date].feelsLike.push(el.feelsLike);
    })

    let dates = data.map(el => {
        return el.date;
    })
    let filteredDates = []
    dates.map((el, index) => {
        if (dates.indexOf(el) === index) {
            filteredDates.push(el)
        }
    })

    let formatedData = filteredDates.map(el => {
        let sumOfTemps = groupedByDate[el].temp.reduce((acc, el) => acc + el);
        let avgTemp = sumOfTemps / groupedByDate[el].temp.length;
        let sumOfFeelsLike = groupedByDate[el].feelsLike.reduce((acc, el) => acc + el);
        let avgFeelsLike = sumOfFeelsLike / groupedByDate[el].feelsLike.length;
        let eachDayWeather = data.filter(res => res.date === el);
        let weather = eachDayWeather.map(el => el.weather);
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
        if (max === cr) img = clear;
        else if (max === f) img = fog;
        else if (max === r) img = rain;
        else if (max === cl) img = cloudy;

        return {
            date: el,
            avgTemp: avgTemp.toFixed(2) + units,
            avgFeelsLike: avgFeelsLike.toFixed(2) + units,
            img
        }
    })

    return (
        <div className="row g-2">
            <div className="WeatherCards mt-5 col-10">
                {formatedData.map((el, index) => {
                    return <WeatherCard
                        unit={unit}
                        key={index}
                        date={el.date}
                        avgTemp={el.avgTemp}
                        avgFeelsLike={el.avgFeelsLike}
                        data={data}
                        setDate={setDate}
                        img={el.img}
                    />
                })}
            </div>
        </div>
    )
}