import React, { useState } from "react";
import axios from "axios";
import { Container } from "@mui/material";
//Importamos los componentes Creados
import SearchBar from "../tools/SearchBar";
import CurrentWeather from "../components/currentWeather";
import WeatherDailyForecast from "../components/weatherDailyForecast";
import ShowError from "../tools/ShowError";

const Dashboard = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState(null);

  const getWeather = async () => {
    setError("");
    try {
      const weatherResponse = await axios.get(
        `http://localhost:5000/api/weather`,
        {
          params: { city },
        }
      );
      setWeatherData(weatherResponse.data);

      //Peticion al back-end para pronostico del clima (forecast)
      const forecastResponse = await axios.get(
        `http://localhost:5000/api/forecast`,
        { params: { city } }
      );
      setForecastData(forecastResponse.data.list.slice(0, 8));
      // Obtener pronóstico para las próximas 24 horas (8 intervalos de 3 horas)
    } catch (error) {
      setError("No se pudo encontrar la ciudad especificada.");
      setWeatherData(null);
      setForecastData([]);
    }
  };

  return (
    <Container>
      <SearchBar city={city} setCity={setCity} getWeather={getWeather} />
      <ShowError message={error} />
      {weatherData && <CurrentWeather weatherData={weatherData} />}
      {forecastData.length > 0 && (
        <WeatherDailyForecast forecastData={forecastData} city={city} />
      )}
    </Container>
  );
};

export default Dashboard;
