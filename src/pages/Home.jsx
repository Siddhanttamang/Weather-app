import { useState ,useEffect} from "react";
import cloud from "../images/cloud.png";
import Weather from "../components/Weather.jsx";
import SearchBar from "../components/SearchBar.jsx";
import { useWeatherContext } from "../contexts/WeatherContext.jsx";
function Home(){
    const[bg,setBg]=useState("");
    const{weatherData,loading,error,desc}=useWeatherContext();
    console.log(desc);
    useEffect(()=>{
      switch(desc){
            case "01d":
                setBg("bg-[url('../images/clear-sky.jpg')]");
                break;
            case "01n":
                setBg("bg-[url('../images/clear-sky-night.jpg')]")
                break;
            case "02d":
                setBg("bg-[url('../images/few-clouds.jpg')]")
                break;
            case "02n":
                setBg("bg-[url('../images/few-clouds-night.jpg')]")
                break;
            default:
                setBg("");
                break;
        }
      
    },[desc]);
    
    
    return (
  <div
    className={`relative flex flex-col h-dvh w-screen items-center  
      ${desc && bg ? bg : "bg-gradient-to-br from-blue-200 via-sky-300 to-blue-400"} 
      bg-cover bg-center bg-no-repeat overflow-hidden p-8`}
  >
        {!desc && (
        <div className="animate-moveRight-bg pointer-events-none"></div>
        )}


    <SearchBar />
    {loading && <p className="text-blue-600 font-medium">Loading...</p>}

    {error && (
      <div className="bg-red-100 border border-red-400 text-red-600 rounded-md">
        {error}
      </div>
    )}
    {weatherData && <Weather weatherData={weatherData} />}
  </div>
);

    
}
export default Home