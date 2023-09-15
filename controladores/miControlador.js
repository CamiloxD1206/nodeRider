import {Json} from "sequelize/types/utils";
import dataAprendiz from "../module/modeloRider";
export const todosDatosApp=async(req,res)=>{
try{
const aprendices=await dataAprendiz.findAll();
res.Json(aprendices)
}catch(error){
   res.Json({message:error.message});
}
    
}

