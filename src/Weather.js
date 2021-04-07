import * as React from 'react'; 
//import axios from 'axios'; 
import {
  DataGrid
} from '@material-ui/data-grid'
import './App.css'
import WeatherInfo from './data/weather.json'


const WeatherData = WeatherInfo.results[0].weatherlocation

const Weather = () => {
 

return (

<div>
<h1>Weather App</h1>

 
<div style={{ height: 400, width: '100%' }}>
<DataGrid
columns={[ { field: 'City'}, { field: 'Farenheight'}, { field: 'Celcius'}, { field: 'Daily Forecast'},  { field: 'Hourly Forecast'} ] }
rows={[
    {
    id: '1',
    City: `${WeatherData[0].location}`, 
    Farenheight: `${WeatherData[0].farenheight}`,
    Celcius: `${WeatherData[0].celcius}`, 
    Daily_Forecast: `${WeatherData[0].seven_day_forecast[0]}` 
    },
    {
    id: '2',
    City: `${WeatherData[1].location}`, 
    Farenheight: `${WeatherData[1].farenheight}`,
    Celcius: `${WeatherData[1].celcius}`,
    Daily_Forecast: `${WeatherData[1].seven_day_forecast[0]}` 
    },
    {
    id: '3',
    City: `${WeatherData[2].location}`, 
    Farenheight: `${WeatherData[2].farenheight}`,
    Celcius: `${WeatherData[2].celcius}`,
    Daily_Forecast: `${WeatherData[2].seven_day_forecast[0]}` 
        }
]}
/>


</div>







</div>




)





}

export default Weather; 
