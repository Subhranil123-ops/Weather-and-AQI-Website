import Toggler from "./Toggler"
import "./Togglers.css"
export default function Togglers({ unit,setUnit, graphType, setGraphType }) {
    return (
        <div className="Togglers">
            <Toggler value1={"metric"} value2={"imperial"} toggle1="°C" toggle2="°F" state={unit} setState={setUnit} />
            <Toggler value1="temp" value2="feelsLike" toggle1="Temperature Over Time" toggle2="Feels Like Over Time" state={graphType} setState={setGraphType} />
        </div>
    )
}
