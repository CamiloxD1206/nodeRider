import express  from "express";
import cors from "cors";
import  miRutaAprendiz  from "./routes/miRutaRider";
import miBase from "./bases/miBaseRider";
const app = express();
// use usar objetossrs que tengo en librerias
//get premite obtener ""
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Hoy casi pierdo clase de node");
});

app.listen(8000,()=>{
console.log('Conectada http://localhost:8000/');

});
app.use('/aprendices', miRutaAprendiz);

try{
await miBase.autenticate()
console.log('conexion existosa')
}catch{
    console.log('error de conexion');

}