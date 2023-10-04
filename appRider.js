// Contenido de appRider.js (archivo principal)
import express from "express";
import cors from "cors";
import miRutaAprendiz from "./routes/miRutaRider.js";
import miBase from "./bases/miBaseRider.js";

const app = express();
const port = 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
    res.send("Hoy casi pierdo clase de node");
});

app.use('/aprendices', miRutaAprendiz);

// Iniciar servidor
app.listen(port, () => {
    console.log(`Conectada http://localhost:${port}/`);
});

// Conectar a la base de datos
try {
    await miBase.authenticate();
    console.log('Conexión exitosa a la base de datos');
} catch (error) {
    console.error('Error de conexión a la base de datos:', error);
}
