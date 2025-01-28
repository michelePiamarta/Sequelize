const db = require('./tabelle/Associazioni')


db.sequelize.authenticate().then(() =>{
    console.log("connessione con il database stabilita")
}).catch((err)=>{
    console.log("errore nella connessione con il database",err)
})