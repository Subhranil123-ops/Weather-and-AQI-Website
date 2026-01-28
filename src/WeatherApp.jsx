import SearchBox from "./Components/SearchBox.jsx"
import ForcastPanel from "./Components/ForcastPanel.jsx"
import { useState } from 'react';

export default function WeatherApp() {
    let [result, setResult] = useState([]);
    let [value, setValue] = useState("metric");

    return (
        <>
            <SearchBox setResult={setResult} value={value} />
            <ForcastPanel result={result} setValue={setValue} value={value} />
        </>
    )
}