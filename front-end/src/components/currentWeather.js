import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const CurrentWeather = ({ weatherData }) => {
  return (
    <Card style={{ marginTop: "20px" }}>
      <CardContent>
        <Typography variant="h5">{weatherData.name}</Typography>
        <Typography variant="body1">
          Temperatura: {weatherData.main.temp} °C
        </Typography>
        <Typography variant="body1">
          Humedad: {weatherData.main.humidity} %
        </Typography>
        <Typography variant="body1">
          Condiciones: {weatherData.weather[0].description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;
