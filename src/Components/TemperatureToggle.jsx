import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import "./TemperatureToggle.css"
export default function TemperatureToggle({ value, setValue,toggle1,toggle2 }) {


    let handleChange = (event, newValue) => {
        if (newValue !== null)
            console.log(newValue)
            setValue(newValue);
    }
    return (
        <ToggleButtonGroup
            value={value} onChange={handleChange}
            exclusive
        >
            <ToggleButton value={toggle1}>{toggle1}</ToggleButton>
            <ToggleButton value={toggle2}>{toggle2}</ToggleButton>
        </ToggleButtonGroup>
    )
}