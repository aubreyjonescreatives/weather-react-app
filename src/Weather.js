import React, { useEffect, useState} from 'react'; 
import axios from 'axios'; 





const Weather = () => {


const [weatherData, setWeatherData] = useState({
    weatherList: []
})

const fetchWeather = () => {
    axios.get(`api.openweathermap.org/data/2.5/weather?`, {
        params: {
            'apiid': process.env.WEATHER_API_KEY,
            'q': 'Salt Lake City'
        }
    })
    .then(function (response) {
        setWeatherData({
            weatherList: response.data
        })
    })
}

useEffect(() => {
    fetchWeather()
})



return (

<div>
<h1>{weatherData.weatherList.id}</h1>




</div>




)





}

export default Weather; 
