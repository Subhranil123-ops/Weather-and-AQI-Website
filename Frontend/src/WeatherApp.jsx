import SearchBox from "./Components/SearchBox.jsx"
import ForcastPanel from "./Components/ForcastPanel.jsx"
import { useState } from 'react';

export default function WeatherApp() {
    let [result, setResult] = useState([]);
    let [unit, setUnit] = useState("metric");
    let [graphType, setGraphType] = useState("temp");
    return (
        <>
            <SearchBox setResult={setResult} unit={unit} graphType={graphType} />
            <ForcastPanel
                result={result}
                setUnit={setUnit}
                unit={unit}
                graphType={graphType}
                setGraphType={setGraphType} />
        </>
    )
}