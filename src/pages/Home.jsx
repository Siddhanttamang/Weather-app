import { useState ,useEffect} from "react";
import {getWeatherData} from "../services/weatherApi.js";
import Weather from "../components/Weather.jsx";

function Home(){

    const[searchQuery,setSearchQuery]=useState("");
    const[weatherData,setWeatherData]=useState(null);
    const[loading,setloading]=useState(false);
    const[error,setError]= useState(true);


  
    const searchWeather = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return

    setloading(true);
    try{
        const weatherResponse= await getWeatherData(searchQuery);
        setWeatherData(weatherResponse);
        setError(null);
    }catch(err){
        setError("Failed to load Weather")
        setWeatherData(null);
        console.log(err);

    }finally{
        setloading(false);
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
            {loading && <div className="loading">
                <p>Loading....</p>
                </div>}
            {error && <div className="error">
                <p>{error}</p>
                </div>}
            { weatherData && <Weather weatherData={weatherData}/>}   

        </div>

    );
    
}
export default Home