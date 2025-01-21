import { Sequelize,DataTypes } from "sequelize";

const sequelize = new Sequelize("aeroporti","root","cisco",{
    host: "mysql",
    dialect: "mysql"
});

sequelize.authenticate().then(() =>{
    console.log("connessione con il database stabilita")
}).catch(()=>{
    console.log("errore nella connessione con il database")
})