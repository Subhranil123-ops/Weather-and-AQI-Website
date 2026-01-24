import TimeChart from "./Timechart"
export default function ForcastPanel({ result }) {
    return (
        <div className="ForcastPanel">
            <TimeChart data={result}/>
        </div>
    )
}