import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Lottie from 'react-lottie-player'
import { sunny } from "../assets/weatherIcons/loader.js"

import "./WeatherCard.css"
export default function WeatherCard({ date, data,setDayForecastData,avgTemp,avgFeelsLike }) {
    let handleChange = (date) => {
        setDayForecastData(prev => data.filter(prev => date === prev.date));
    }

    return (
        <Card >
            <CardActionArea onClick={() => handleChange(date)} >
                <CardContent style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Typography variant="p" >
                        <b>{date}</b>
                    </Typography>
                    <Lottie
                        loop
                        animationData={sunny}
                        play
                        style={{ width: "4vmax", height: "4vmax" }}
                    />
                    <div className="temperature">
                        <Typography variant="p">
                            temp
                        </Typography>
                        <Typography variant="p">
                            feels
                        </Typography>
                    </div>
                </CardContent>

            </CardActionArea>
        </Card>

    )
}