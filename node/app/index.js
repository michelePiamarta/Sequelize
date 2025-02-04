const db = require('./tabelle/Associazioni')
const express = require('express')

const app = express();

db.sequelize.authenticate().then(() => {
    console.log("connessione con il database stabilita")
}).catch((err) => {
    console.log("errore nella connessione con il database", err)
})

db.sequelize.sync().then(() => {
    console.log("tabelle sincronizzate con successo");
}).catch((err) => {
    console.log("errore nella sincronizzazione delle tabelle", err);
})

app.get('/fittizi', async (req, res) => {
    await db.tabelle.Categoria.create({ nome: "Internazionale" });
    await db.tabelle.Regione.create({ nome: "Veneto" });
    await db.tabelle.Citta.create({ nome: "Domegliara", numeroabitanti: 1, fkregione: 1 });
    await db.tabelle.Aeroporto.create({ codice: 1, nome: 'prenos', fkcategoria: 1, fkcitta: 1 });
    res.json({ message: 'avi' });
})
app.get('/aeroporti', async (req, res) => {
    res.json(await db.tabelle.Aeroporto.findAll());
})

app.listen(3000, () => {
    console.log("applicazione in ascolto sulla porta 3000");
})