import { useWeatherContext } from "../contexts/WeatherContext";
function Weather() {
  const {weatherData}= useWeatherContext();
  if (!weatherData) return null;

  return (
    <div className="w-dvw h-dvh flex  justify-center p-8  ">
      {String(weatherData.cod) === "200" ? (
        <div className="bg-transparent backdrop-blur-md shadow-xl rounded-2xl p-6 max-w-sm w-full text-gray-800">
          {/* Location */}
          <h3 className="text-2xl font-bold text-center mb-4">{weatherData.name}</h3>

          {/* Weather Icon + Description */}
          <div className="flex items-center justify-center mb-4">
            <img
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt={weatherData.weather[0].description}
                className="w-24 h-24"
                />

            <p className="capitalize text-lg ml-2">{weatherData.weather[0].description}</p>
          </div>

          {/* Weather Details */}
          <div className="space-y-2 text-center">
            <p className="text-lg">
              🌡️ Temperature: <span className="font-semibold">{weatherData.main.temp}°C</span>
            </p>
            <p>
              🤗 Feels Like:{" "}
              <span className="font-semibold">{weatherData.main.feels_like}°C</span>
            </p>
            <p>
              💧 Humidity:{" "}
              <span className="font-semibold">{weatherData.main.humidity}%</span>
            </p>
            <p>
              🌬️ Wind Speed:{" "}
              <span className="font-semibold">{weatherData.wind.speed} m/s</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="text-center bg-red-100 text-red-700 p-4 rounded-xl shadow-md">
          <p>{weatherData.message}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
