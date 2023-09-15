import  Sequelize  from "sequelize";
 const miBase=  new Sequelize('aprendiz','root','1234',{
    host:"loclahost",
    dialect:"mysql"
 })

 export default miBase;