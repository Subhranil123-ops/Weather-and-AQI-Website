import { useState } from "react"
import SearchBox from "./Components/SearchBox.jsx"
import ForcastPanel from "./Components/ForcastPanel.jsx"


export default function WeatherApp() {
 let [result, setResult] = useState([])   
    return (
        <>
            <SearchBox setResult={setResult}/>
            <ForcastPanel result={result}/>
        </>
    )
}