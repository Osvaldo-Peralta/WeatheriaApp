import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const WeatherDailyForecast = ({ forecastData, city }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Pronostico del Dia</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {forecastData.map((forecast, index) => (
          <Card key={index} style={{ marginBottom: "10px" }}>
            <CardHeader
              title={city}
              subheader={new Date(forecast.dt * 1000).toLocaleTimeString()}
            />
            <CardContent>
              <Typography variant="body1" style={{ marginBottom: "5px" }}>
                Temperatura: {forecast.main.temp}°C
              </Typography>
              <Typography variant="body1" style={{ marginBottom: "5px" }}>
                Condiciones: {forecast.weather[0].description}
              </Typography>
              <Typography variant="body1" style={{ marginBottom: "5px" }}>
                Velocidad del viendo: {forecast.wind.speed}m/s
              </Typography>
              <Typography style={{ marginBottom: "5px" }}>
                Probabilidad de Precipitacion: {forecast.pop * 100}%
              </Typography>
            </CardContent>
          </Card>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default WeatherDailyForecast;
