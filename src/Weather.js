import React, { useEffect, useState} from 'react'; 
//import axios from 'axios'; 
import {
  DataGrid
} from '@material-ui/data-grid'
import './App.css'
import WeatherInfo from './data/weather.json'


const Weather = () => {
 



const [weatherData, setWeatherData] = useState({
    loading: false,
    weatherList: [],
})


useEffect(() => {
    setWeatherData({
        loading: false, 
        weatherList: WeatherInfo.results[0].weatherlocation})
}, [])


 //const [weatherLocation, setweatherLocation] = useState('')




return (

<div>
<h1>Weather App</h1>

 
<div style={{ height: 400, width: '100%' }}>
<DataGrid
columns={[ { field: 'City'}, { field: 'Farenheight'}, { field: 'Celcius'} ] }
rows={[
    {
    id: '1',
    City: `${weatherData.weatherList[0].location}`, 
    Farenheight: `${weatherData.weatherList[0].farenheight}`,
    Celcius: `${weatherData.weatherList[0].celcius}`
    },
    {
    id: '2',
    City: `${weatherData.weatherList[1].location}`, 
    Farenheight: `${weatherData.weatherList[1].farenheight}`,
    Celcius: `${weatherData.weatherList[1].celcius}`
    },
    {
        id: '3',
        City: `${weatherData.weatherList[2].location}`, 
        Farenheight: `${weatherData.weatherList[2].farenheight}`,
        Celcius: `${weatherData.weatherList[2].celcius}`
        }
]}
/>


</div>







</div>




)





}

export default Weather; 
