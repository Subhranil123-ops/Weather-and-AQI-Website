import { useState, useEffect } from 'react';
import StormIcon from '@mui/icons-material/Storm';
import "./SearchBox.css"

export default function SearchBox({ setResult }) {
    let [input, setInput] = useState("");
    let [options, setOptions] = useState([])
    let [selectedOption, setSelectedOption] = useState(null);

    let handleChange = (event) => {
        setInput(event.target.value);
    }

    let searchLocations = async () => {
        let geoUrl = import.meta.env.VITE_OPENWEATHER_GEO_URL;
        let apiKey = import.meta.env.VITE_API_KEY;
        let limit = 5;
        if (input) {
            let resCoordinates = await fetch(`/api${geoUrl}?q=${input}&limit=${limit}&appid=${apiKey}`);
            let jsonCoordinates = await resCoordinates.json();
            setOptions(jsonCoordinates);
        }
    }

    useEffect(() => {
        searchLocations();
    }, [input]);

    let searchWeather = async (lat, lon) => {
        let weatherUrl = import.meta.env.VITE_OPENWEATHER_URL;
        let apiKey = import.meta.env.VITE_API_KEY;
        let resWeather = await fetch(`/api${weatherUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
        let jsonWeather = await resWeather.json();
        let { list, city } = jsonWeather;
        let { country, name } = city;
        let result = list.filter(el => {
            let hour = el.dt_txt.split(" ")[1].split(":")[0];
            const allowedHours = ["09", "12", "03", "18", "00"];
            return allowedHours.includes(hour);
        });

        let finalData = result.map(el => {
            const [date, time] = el.dt_txt.split(" ");
            let { main } = el;
            return {
                code: country,
                city: name,
                date,
                time,
                temp: main.temp,
                feelsLike: main.feels_like,
                minTemp: main.temp_min,
                maxTemp: main.temp_max,
                humidity: main.humidity,
                pressure: main.pressure,
                seaLevel: main.sea_level
            }

        });
        setResult(finalData);
        console.log(finalData);

    };

    let handleSearch = (event) => {
        setInput(event.target.textContent);
        let coordinates = options.find(el => {
            if (event.target.innerHTML === `${el.name},${el.country}`) {
                return el;
            }
        });
        setSelectedOption(coordinates);
    }

    useEffect(() => {
        if (selectedOption === null) return;
        searchWeather(selectedOption.lat, selectedOption.lon);
    }, [selectedOption])

return (
    <div className="row">
        <div className="col-6 mx-auto">
            <div className="input-group">
                <input type="text" className="form-control " value={input} onChange={handleChange} />
            </div>
            <div className='list'>
                <ul className='options'>
                    {options.length > 0 && options.map((el, index) => {
                        return <button key={index} onClick={handleSearch} className='btn option' type="submit">{el.name},{el.country}</button>
                    })}
                </ul>
            </div>
        </div>
    </div>
)
}
