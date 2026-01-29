import WeatherCard from "./WeatherCard"
import "./WeatherCards.css"

export default function WeatherCards({ data, setDayForecastData }) {

    // let filteredData = data.filter(el => el.date === dayForecastData[0].date);
    // let temp = filteredData.map(el => {
    //     return el.temp;
    // });
    // let feelsLike = filteredData.map(el => {
    //     return el.feelsLike;
    // });

    // let sumOfTemps = temp.reduce((el, res) => el + res);
    // let avgTemp = sumOfTemps / filteredData.length;
    // let sumOfFeelsLike = feelsLike.reduce((el, res) => el + res);
    // let avgFeelsLike = sumOfFeelsLike / filteredData.length;

    let dates = data.map(el => {
        return el.date;
    })
    let filteredDates = []
    dates.map((el, index) => {
        if (dates.indexOf(el) === index) {
            filteredDates.push(el)
        }
    })
    return (
        <div className="WeatherCards mt-5">
            {filteredDates.map(el => {
                return <WeatherCard
                    data={data}
                    date={el}
                    // avgTemp={avgTemp}
                    // avgFeelsLike={avgFeelsLike}
                    setDayForecastData={setDayForecastData} />
            })}
        </div>
    )
}