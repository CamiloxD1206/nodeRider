import express from "express";
import { GetAllAprendiz, GetAprendiz, CreateAprendiz, UpdateAprendiz, DeleteAprendiz } from "../controladores/miControlador.js";

const miRutaAprendiz = express.Router();

miRutaAprendiz.get('/', GetAllAprendiz);
miRutaAprendiz.get('/:id', GetAprendiz);
miRutaAprendiz.post('/', CreateAprendiz);  // Cambiado para que no haya conflicto con el parámetro de ruta
miRutaAprendiz.put('/:id', UpdateAprendiz);
miRutaAprendiz.delete('/:id', DeleteAprendiz);

export default miRutaAprendiz;
