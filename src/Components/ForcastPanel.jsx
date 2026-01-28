import TimeChart from "./Timechart"
import TemperatureToggle from "./TemperatureToggle"
import Togglers from "./Togglers"

export default function ForcastPanel({ result,setValue,value }) {
    
    return (
        <div className="ForcastPanel">
            <Togglers setValue={setValue} value={value}/>
            <TimeChart data={result} />
        </div>
    )
}