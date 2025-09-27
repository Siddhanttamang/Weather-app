const API_KEY = import.meta.env.API_KEY;

const BASE_URL="http://api.openweathermap.org/data/2.5"

export const getWeatherData= async(city)=>{
    const response = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data= await response.json();
    return data;

}

// const WeatherData= await getWeatherData("birtamod");
// console.log("Weather: ",WeatherData);
//  if(WeatherData){
//     console.log("Temperature: ",WeatherData.main.temp);
//     console.log("Feels like: ",WeatherData.main.feels_like);
//  }
