import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import "./Toggle.css"
export default function Toggler({ value1,value2,toggle1, toggle2, state, setState }) {


    let handleChange = (event, newValue) => {
        if (newValue !== null)
        setState(newValue);
    }
    return (
        <ToggleButtonGroup
            value={state} onChange={handleChange}
            exclusive
        >
            <ToggleButton style={{textTransform:"none"}} value={value1}>{toggle1}</ToggleButton>
            <ToggleButton style={{textTransform:"none"}} value={value2}>{toggle2}</ToggleButton>
        </ToggleButtonGroup>
    )
}