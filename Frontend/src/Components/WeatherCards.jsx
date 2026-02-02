import WeatherCard from "./WeatherCard"
import "./WeatherCards.css"


export default function WeatherCards({ data, unit, setDate,iconWeather }) {

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
        return {
            date: el,
            avgTemp: avgTemp.toFixed(2) + units,
            avgFeelsLike: avgFeelsLike.toFixed(2) + units,
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
                        iconWeather={iconWeather}
                    />
                })}
            </div>
        </div>
    )
}