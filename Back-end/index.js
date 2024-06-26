const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
const apiKey = process.env.CLAVE_API;
/* Declaramos las rutas */

//Ruta Principal, Todo esta OK!
app.get("/api", (req, res) => {
  res.json({ message: "Hola desde el backend!" });
});

//Ruta para peticion simple de {city} en openweathermap.org
app.get("/api/weather", async (req, res) => {
  const { city } = req.query;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      error: "No se pudo obtener el clima para la ciudad especificada",
    });
  }
});

//Puerto de escucha
app.listen(PORT, () => {
  console.log("Server en servicio en el puerto: ", PORT);
});
