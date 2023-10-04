import  Sequelize  from "sequelize";
 const miBase=  new Sequelize('aprendiz','root','1234',{
    host:"localhost",
    dialect:"mysql"
 })

 export default miBase;