import { useState,useEffect } from 'react'
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import "./NavBar.css"
export default function NavBar() {
    let [light, setLight] = useState(true);

    let handleTheme = () => {
        light ? setLight(false) : setLight(true);
    }
    useEffect(()=>{
        if(light)document.documentElement.removeAttribute("data-theme");
        else document.documentElement.setAttribute("data-theme", "dark");
    },[light])

    return (

        <nav className="navbar sticky-top mb-5 d-flex">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <div>
                    <IconButton onClick={handleTheme}>
                        {light ? <LightModeIcon /> : <DarkModeIcon />}
                    </IconButton>
                </div>
            </div>
        </nav>

    )
}