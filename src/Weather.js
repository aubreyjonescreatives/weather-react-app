import * as React from 'react'; 
//import axios from 'axios'; 
import {
  DataGrid
} from '@material-ui/data-grid'
//import { useDemoData } from '@material-ui/x-grid-data-generator'
import './App.css'
import WeatherInfo from './data/weather.json'


const WeatherData = WeatherInfo.results[0].weatherlocation

const Weather = () => {
 


return (

<div>
<h1 style={ {margin: '30px'}}>Weather App</h1>

 
<div style={{ height: 500, width: '1200px', margin: '30px'}}>
<DataGrid 
columns={[ { field: 'City', width: "200px"}, { field: 'Farenheight', width: '200px'}, { field: 'Celcius', width: '200px'}, 
{ field: 'Daily Forecast', width: '200px', hide: 'false'},  { field: 'Hourly Forecast', width: '200px', hide: 'false'} ] }
rows={[
    {
    id: '1',
    City: `${WeatherData[0].location}`, 
    Farenheight: `${WeatherData[0].farenheight}`,
    Celcius: `${WeatherData[0].celcius}`, 
    Daily_Forecast: `${WeatherData[0].seven_day_forecast.sunday}`, 
    Hourly_Forecast: `${WeatherData[0].sunday_hourly_forecast.zero}`
    },
    {
    id: '2',
    City: `${WeatherData[1].location}`, 
    Farenheight: `${WeatherData[1].farenheight}`,
    Celcius: `${WeatherData[1].celcius}`,
    Daily_Forecast: `${WeatherData[1].seven_day_forecast.sunday}`,
    Hourly_Forecast: `${WeatherData[1].sunday_hourly_forecast.zero}` 
    },
    {
    id: '3',
    City: `${WeatherData[2].location}`, 
    Farenheight: `${WeatherData[2].farenheight}`,
    Celcius: `${WeatherData[2].celcius}`,
    Daily_Forecast: `${WeatherData[2].seven_day_forecast.sunday}`, 
    Hourly_Forecast: `${WeatherData[2].sunday_hourly_forecast.zero}` 
        }
]}
/>


</div>







</div>




)





}

export default Weather; 
