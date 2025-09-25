import { useState ,useEffect} from "react";
import {getWeatherData} from "../services/weatherApi.js";
import Weather from "../components/Weather.jsx";
import NavBar from "../components/NavBar.jsx"
function Home(){
    const[weatherData,setWeatherData]=useState(null);
    const[loading,setloading]=useState(false);
    const[error,setError]= useState(true);
    const[desc,setDesc]=useState("");


  
    const searchWeather = async (query) => {
    setloading(true);
    try{
        const weatherResponse= await getWeatherData(query);
        setWeatherData(weatherResponse);
        setError(null);
        console.log(weatherResponse);
        setDesc(weatherResponse.weather[0].icon)
        console.log(weatherResponse.weather[0].icon); // should print something like "01d"

    }catch(err){
        setError("Failed to load Weather")
        setWeatherData(null);
        console.log(err);

    }finally{
        setloading(false);
    }
    }
    return(
        <div className={`flex flex-col h-dvh items-center ${desc ?"bg-[url('../images/sky.jpg')]":"bg-gradient-to-br from-blue-200 via-sky-300 to-blue-400"} p-4`}>
      <NavBar onSearch={searchWeather} />

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