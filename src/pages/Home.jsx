import { useState ,useEffect} from "react";
import {getWeatherData} from "../services/weatherApi.js"

function Home(){

    const[searchQuery,setSearchQuery]=useState("");
    const[weatherData,setWeatherData]=useState(null);

  
    const searchWeather = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return
    try{
        const weatherResponse= await getWeatherData(searchQuery);
        setWeatherData(weatherResponse);
        console.log(weatherResponse);
    }catch(err){
        console.log(err);

    }
    }
    return(
        <div className="home">
            <form onSubmit={searchWeather} className="search-weather">
                <input 
                type="text"
                placeholder="Enter City"
                className="search-input"
                value={searchQuery}
                onChange={(e)=>{setSearchQuery(e.target.value)}}
                />
                <button type="submit" className="search-button">
                    Get Weather
                </button>
            </form>
            { weatherData &&(
            <div>
                {(String(weatherData.cod)==="200")?(<div>
                    <h3>{weatherData.name}</h3>
                    <p>Weather: {weatherData.weather[0].description}</p>
                    <p>Temperature: {weatherData.main.temp} °C</p>
                    <p>Feels Like: {weatherData.main.feels_like} °C</p>
                    <p>Humidity: {weatherData.main.humidity} %</p>
                    <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                </div>):(<div>
                    <p>{weatherData.message}</p>
                </div>)
                }
                
            </div>)
            }   

        </div>

    );
    
}
export default Home