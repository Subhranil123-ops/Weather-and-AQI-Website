import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Lottie from 'react-lottie-player'
import { sunny } from "../assets/weatherIcons/loader.js"
import "./WeatherCard.css"
import { useEffect } from 'react';
export default function WeatherCard({ date, data, setDayForecastData, avgTemp, avgFeelsLike,unit,handleClick }) {
    let handleClick = (date) => {
        console.log(date)
        // console.log("data",data)
        // let day=data.filter(el => date === el.date);
        // // console.log("day",day);
        // console.log(date);
        // console.log(data)
        // setDayForecastData(data.filter(prev => date === prev.date));
    }
    return (
        <Card className='WeatherCard' sx={{width:"7rem",
        minHeight:"10rem",
        backdropFilter:"blur(10px)",
        border:"1px solid transparent", 
        boxShadow:"none", marginLeft:"0.25rem"}} >
            <CardActionArea onClick={() => handleClick(date)} >
                <CardContent style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Typography variant="p" sx={{textAlign:"center"}} >
                        <b>{date}</b>
                    </Typography>
                    <Lottie
                        loop
                        animationData={sunny}
                        play
                        style={{ width: "4vmax", height: "4vmax" }}
                    />
                    <div className="temperature">
                        <Typography variant="caption" sx={{opacity:0.8}}>
                           {avgTemp}
                        </Typography>
                        <Typography variant="caption" sx={{opacity:0.8}}>
                            {avgFeelsLike}
                        </Typography>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}