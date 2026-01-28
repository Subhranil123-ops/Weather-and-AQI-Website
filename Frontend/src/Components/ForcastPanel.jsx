import TimeChart from "./Chart"
import Togglers from "./Togglers"
export default function ForcastPanel({ result,setUnit,unit,graphType,setGraphType }) {
    
    return (
        <div className="ForcastPanel">
            <Togglers setUnit={setUnit} unit={unit} graphType={graphType} setGraphType={setGraphType} />
            <TimeChart data={result} graphType={graphType} unit={unit} />
        </div>
    )
}