import miBase from "../bases/miBaseRider.js";
import { DataTypes } from "sequelize";
const dataAprendiz=miBase.define("aprendiz",{

    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    apellido:{
        type: DataTypes.STRING,
        allowNull: true,
    }, 
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
},{
    tableName: 'aprendiz',
    timestamps: true, 
 });

export default dataAprendiz;