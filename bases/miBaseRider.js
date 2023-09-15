import  Sequelize  from "sequelize";
 const miBase=  new Sequelize('aprendiz','root','1234',{
    "host":"loclahost",
    "dialet":"mysql"
 })

 export default miBase;