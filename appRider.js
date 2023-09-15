import express  from "express";
import cors from "cors";
// const app=express();
// use usar objetos que tengo en librerias
//get premite obtener ""
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Hoy casi pierdo clase de node");
});

app.listen(8000,(req,res)=>{
res(console.log('Conectada http://localhost:8000/'));

});
