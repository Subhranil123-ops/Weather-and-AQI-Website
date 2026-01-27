import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import "./TemperatureToggle.css"
export default function TemperatureToggle({ unit, onUnitChange }) {


    let handleChange = (event, newUnit) => {
        if (newUnit !== null)
            onUnitChange(newUnit);
    }
    return (
        <ToggleButtonGroup
            value={unit} onChange={handleChange}
            exclusive
            className='TemperatureToggle'
        >
            <ToggleButton value="cel">°C</ToggleButton>
            <ToggleButton value="frht">°F</ToggleButton>
        </ToggleButtonGroup>
    )
}