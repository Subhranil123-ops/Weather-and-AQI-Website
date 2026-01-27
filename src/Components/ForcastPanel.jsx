import TimeChart from "./Timechart"
import TemperatureToggle from "./TemperatureToggle"

export default function ForcastPanel({ result,setUnit,unit }) {
    
    return (
        <div className="ForcastPanel">
            <TemperatureToggle onUnitChange={setUnit} unit={unit}/>
            <TimeChart data={result} />
        </div>
    )
}