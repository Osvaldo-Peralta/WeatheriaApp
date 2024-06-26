import React, { useState } from "react";
import axios from "axios";
import { Typography, Container } from "@mui/material";
//Importamos los componentes Creados
import SearchBar from "../tools/SearchBar";
import CurrentWeather from "../components/currentWeather";
import ShowError from "../tools/ShowError";

const Dashboard = () => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState("");

  const getWeather = async () => {
    setError("");
    try {
      const response = await axios.get(`http://localhost:5000/api/weather`, {
        params: { city },
      });
      setWeatherData(response.data);
    } catch (error) {
      setError("No se pudo encontrar la ciudad especificada.");
      setWeatherData(null);
    }
  };

  return (
    <Container>
      <SearchBar city={city} setCity={setCity} getWeather={getWeather} />
      <ShowError message={error} />
      {weatherData && <CurrentWeather weatherData={weatherData} />}
    </Container>
  );
};

export default Dashboard;
