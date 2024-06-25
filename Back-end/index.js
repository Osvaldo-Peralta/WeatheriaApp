const express = require("express");
const cors = require("cors");

//Inicializar el servidor
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

/* Declaramos las rutas */
app.get("/api", (req, res) => {
  res.json({ message: "Hola desde el backend!" });
});

app.listen(PORT, () => {
  console.log("Server en servicio en el puerto: ", PORT);
});
