const db = require('./tabelle/Associazioni')


db.sequelize.authenticate().then(() =>{
    console.log("connessione con il database stabilita")
}).catch((err)=>{
    console.log("errore nella connessione con il database",err)
})

db.sequelize.sync().then(()=>{
    console.log("tabelle sincronizzate con successo");
}).catch((err)=>{
    console.log("errore nella sincronizzazione delle tabelle", err);
})