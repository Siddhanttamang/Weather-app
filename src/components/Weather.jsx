function Weather({weatherData}){
    if(!weatherData) return null;
    return (
        <div className="weather-content">
                {(String(weatherData.cod)==="200")?(<div className="weather-data">
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
                
            </div>
    )
}
export default Weather;