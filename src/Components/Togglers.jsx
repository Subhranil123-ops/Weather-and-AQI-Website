import TemperatureToggle from "./TemperatureToggle"
import "./Togglers.css"
export default function Togglers({setUnit,unit}){
    return (
<div className="Togglers">
<TemperatureToggle toggle1="°C" toggle2="°F" setUnit={setUnit} unit={unit}/>
<TemperatureToggle toggle1="Temperature Over Time" toggle2="Feels Like Over Time"/>
</div>
    )
}