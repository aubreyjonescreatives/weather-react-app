import React, { useEffect, useState} from 'react'; 
//import axios from 'axios'; 
import {
    List, 
    ListItem, 
    MenuItem,
    Menu,
   // ListItemAvatar, 
//ListItemIcon, 
//ListItemSecondaryAction, 
ListItemText, 
 
FormGroup, 
FormControlLabel, 
Checkbox, 
Grid, 
Typography, 
FolderIcon, 
DeleteIcon} from '@material-ui/core'
import './App.css'
import WeatherInfo from './data/weather.json'


const Weather = () => {
 

function generate(element) {
    return [0].map((value) => 
    React.cloneElement(element, {
        key: value, 
    }), 
    )
}


function generate2(element) {
    return [0].map((value) => 
    React.cloneElement(element, {
        key: value, 
    }), 
    )
}


function generate3(element) {
    return [0].map((value) => 
    React.cloneElement(element, {
        key: value, 
    }), 
    )
}


const [dense, setDense] = React.useState(false)
const [secondary, setSecondary] = React.useState(false)
const [thirdOption, setThirdOption] = React.useState(false)
const [weatherDegreeF, setweatherDegreeF] = React.useState(false)
const [weatherDegreeC, setweatherDegreeC] = React.useState(false)



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

    <div>
    <FormGroup row>
        <FormControlLabel
        control={
            <Checkbox checked={dense} onChange={(event) => setDense(event.target.checked)} /> 
        }
        label={`${weatherData.weatherList[0].location}`}
        />
          <FormControlLabel
        control={
            <Checkbox checked={secondary} onChange={(event) => setSecondary(event.target.checked)} /> 
        }
        label={`${weatherData.weatherList[1].location}`}
        />
          <FormControlLabel
        control={
            <Checkbox checked={thirdOption} onChange={(event) => setThirdOption(event.target.checked)} /> 
        }
        label={`${weatherData.weatherList[2].location}`}
        />
        </FormGroup>




        <FormGroup row>

            <FormControlLabel
        control={
            <Checkbox checked={weatherDegreeF} onChange={(event) => setweatherDegreeF(event.target.checked)} /> 
        }
        label="Farenheight"
        />
              <FormControlLabel
        control={
            <Checkbox checked={weatherDegreeC} onChange={(event) => setweatherDegreeC(event.target.checked)} /> 
        }
        label="Celcius" 
        />
    </FormGroup>



    
    <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <Typography variant="h6">{weatherData.location}</Typography>
            <List dense={dense}>
                {generate(
                    <ListItem>
                        <ListItemText
                        primary={`${weatherData.farenheight}`}
                        secondary={secondary ? 'Secondary text' : null}
                        />
                    </ListItem>
                    
                )}
                 {generate2(
                    <ListItem>
                        <ListItemText
                        primary={`${weatherData.celcius}`}
                        secondary={secondary ? 'Secondary text' : null}
                        />
                    </ListItem>
                    
                )},
                  {generate3(
                    <ListItem>
                        <ListItemText
                        primary={`${weatherData.seven_day_forecast}`}
                        secondary={secondary ? 'Secondary text' : null}
                        />
                    </ListItem>
                    
                )}
            </List>
        </Grid>

    </Grid>



    </div>





</div>




)





}

export default Weather; 
