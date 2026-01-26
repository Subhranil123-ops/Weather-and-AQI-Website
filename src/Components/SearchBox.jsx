import { useState, useEffect } from 'react';
import StormIcon from '@mui/icons-material/Storm';
import "./SearchBox.css"

export default function SearchBox({ setResult }) {
    let [input, setInput] = useState("");
    let [options, setOptions] = useState([])
    let [selectedOption, setSelectedOption] = useState(null);
    let [cache, setCache] = useState({});
    let [isChoosing, setIsChoosing] = useState(false);
    let [keyNav, setKeyNav] = useState(-1);
    let handleChange = (event) => {
        setInput(event.target.value);
        setIsChoosing(true);
        if (event.target.value = "") {
            setIsChoosing(false);
            return;
        }
    }

    let searchLocations = async () => {
        let geoUrl = import.meta.env.VITE_OPENWEATHER_GEO_URL;
        let apiKey = import.meta.env.VITE_API_KEY;
        let limit = 5;
        if (input) {
            let resCoordinates = await fetch(`/api${geoUrl}?q=${input}&limit=${limit}&appid=${apiKey}`);
            let jsonCoordinates = await resCoordinates.json();
            setOptions(jsonCoordinates);
            setCache(prev => ({ ...prev, [input]: jsonCoordinates }));
        }
    }

    useEffect(() => {
        if (cache[input]) {
            setOptions(cache[input]);
            return;
        }
        let timer = setTimeout(searchLocations, 300);
        return () => {
            clearTimeout(timer);
        }
    }, [input]);

    let handleKeyBoardNav = (event) => {
        if (event.code === "ArrowDown" && keyNav < options.length - 1) {
            setKeyNav(prev => {
                return prev + 1;
            });
        } else if (event.code === "ArrowUp" && keyNav > 0) {
            setKeyNav(prev => {
                return prev - 1;
            });
        }
        else if (event.code === "Enter") {
            options.map((el, index) => {
                if (keyNav === index) {
                    setSelectedOption(el);
                    setIsChoosing(false);
                }
            })
        }

    }
    
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

        let finalData = list.map(el => {
            const [date, time] = el.dt_txt.split(" ");
            let { main } = el;
            return {
                code: country,
                city: name,
                date,
                time:time.split(":")[0],
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
        setIsChoosing(false);
    }

    useEffect(() => {
        if (selectedOption === null) return;
        searchWeather(selectedOption.lat, selectedOption.lon);
    }, [selectedOption])

    let inpStyles = {
        borderRadius: "2rem",
        backgroundColor: isChoosing ? "white" : "#ececec",
        border: isChoosing ? null : "#dee2e6",
    }

    return (
        <div className="row">
            <div className="col-6 mx-auto">
                <div className="input-group">
                    <input
                        style={inpStyles}
                        type="text"
                        className="form-control SearchBox"
                        value={input}
                        onChange={handleChange}
                        onKeyDown={handleKeyBoardNav}
                    />
                </div>
                <ul className='options'>
                    {(isChoosing && options.length > 0) && options.map((el, index) => {
                        return <li key={index} onClick={handleSearch} type="submit" className={keyNav === index?"on-hover":null}>{el.name},{el.country}</li>
                    })}
                </ul>

            </div>
        </div >
    )
}
