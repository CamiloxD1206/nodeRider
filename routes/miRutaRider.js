import express  from "express";
import { todosDatosApp } from "../controladores/miControlador";
export const miRutaAprendiz=express.Router();

miRutaAprendiz.get('./',todosDatosApp);
