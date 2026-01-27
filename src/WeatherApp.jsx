import SearchBox from "./Components/SearchBox.jsx"
import ForcastPanel from "./Components/ForcastPanel.jsx"
import { useState } from 'react';

export default function WeatherApp() {
    let [result, setResult] = useState([]);
    let [unit, setUnit] = useState("cel");

    return (
        <>
            <SearchBox setResult={setResult} unit={unit} />
            <ForcastPanel result={result} setUnit={setUnit} unit={unit} />
        </>
    )
}