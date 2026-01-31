import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import "./Toggle.css"
export default function Toggler({ value1, value2, toggle1, toggle2, state, setState }) {


    let handleChange = (event, newValue) => {
        if (newValue !== null)
            setState(newValue);
    }
    return (
        <ToggleButtonGroup
            value={state} onChange={handleChange}
            exclusive
            sx={{
                flexWrap: "wrap",
                maxWidth: "100%",
            }}
        >
            <ToggleButton sx={{
                textTransform: "none",
                fontSize: "clamp(0.75rem, 2.5vw, 0.9rem)",
                px: 1.5,
                whiteSpace: "nowrap",
            }}
                value={value1}>{toggle1}</ToggleButton>
            <ToggleButton sx={{
                textTransform: "none",
                fontSize: "clamp(0.75rem, 2.5vw, 0.9rem)",
                px: 1.5,
                whiteSpace: "nowrap",
            }} value={value2}>{toggle2}</ToggleButton>
        </ToggleButtonGroup>
    )
}