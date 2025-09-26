import { useState ,useEffect} from "react";
import {getWeatherData} from "../services/weatherApi.js";
import Weather from "../components/Weather.jsx";
import SearchBar from "../components/SearchBar.jsx";
import { useWeatherContext } from "../contexts/WeatherContext.jsx";
function Home(){
    const{weatherData,loading,error,desc}=useWeatherContext();
    
    return(
        <div className={`flex flex-col h-dvh items-center ${desc ?" bg-[url('../images/sky.jpg')]":"bg-gradient-to-br from-blue-200 via-sky-300 to-blue-400"} p-8`}>
            <SearchBar/>
      {loading && <p className="text-blue-600 font-medium">Loading...</p>}

      {error && (
        <div className=" bg-red-100 border border-red-400 text-red-600 rounded-md">
          {error}
        </div>
      )} 
            { weatherData && <Weather weatherData={weatherData}/>}   
        </div>

    );
    
}
export default Home