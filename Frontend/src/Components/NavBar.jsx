import { useState, useEffect } from 'react'
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import "./NavBar.css"

export default function NavBar() {
    let [light, setLight] = useState(true);

    let handleTheme = () => {
        light ? setLight(false) : setLight(true);
    }
    useEffect(() => {
        if (light) document.documentElement.removeAttribute("data-theme");
        else document.documentElement.setAttribute("data-theme", "dark");
    }, [light])

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="left-content">
                    <a className="navbar-logo" href="#"><img src="/logo.png"/><span className='app-name'>BreathX</span></a>
                </div>
                <div className="center-content">
                    <ul className="navbar-menu">
                        <li className='navbar-item'>Home</li>
                        <li className='navbar-item'>Call</li>
                        <li className='navbar-item'>Support</li>
                    </ul>
                </div>
                <div className="right-content">
                    <div className='themeButton'> <IconButton onClick={handleTheme}>
                        {light ? <LightModeIcon /> : <DarkModeIcon />}
                    </IconButton>
                    </div>
                    <div className="navbar-toggler">
                        <span className='bars'></span>
                        <span className='bars'></span>
                        <span className='bars'></span>
                    </div>
                </div>
            </div>
        </nav>

    )
}