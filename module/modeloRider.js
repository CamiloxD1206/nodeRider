import miBase from "../bases/miBaseRider.js";
import { DataTypes } from "sequelize";
const dataAprendiz=miBase.define("aprendiz",{id:{type:DataTypes.STRING},nombre:{type:DataTypes.STRING},apellido:{type:DataTypes.STRING}});

export default dataAprendiz;