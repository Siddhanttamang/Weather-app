import { useContext,createContext,useState } from "react";
import { getWeatherData } from "../services/weatherApi";

const WeatherContext=createContext();

export const useWeatherContext=()=>useContext(WeatherContext);

export const WeatherProvider=({children})=>{
    const[weatherData,setWeatherData]=useState(null);
    const[loading,setloading]=useState(false);
    const[error,setError]= useState(true);
    const[desc,setDesc]=useState("");
    const[bg,setBg]=useState("");


  
    const searchWeather = async (query) => {
    setloading(true);
    try{
        const weatherResponse= await getWeatherData(query);
        setWeatherData(weatherResponse);
        setError(null);
        console.log(weatherResponse);
        setDesc(weatherResponse.weather[0].icon)
        console.log(typeof weatherResponse.weather[0].icon); // should print something like "01d"

    }catch(err){
        setError("Failed to load Weather")
        setWeatherData(null);
        console.log(err);

    }finally{
        setloading(false);
    
    
    }
    }
    const value={
        weatherData,
        loading,
        desc,
        searchWeather,
        error
        
    }
    return (
        <WeatherContext.Provider value={value}>
            {children}
            </WeatherContext.Provider>
    )

}