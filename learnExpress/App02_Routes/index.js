const express = require('express');

const app = express();

//ROUTER
app.get("/", (req,res) => {
    res.send('Alooh world');
})

app.get("/about", (req,res) => {
    res.send('This is about');
})

app.get("/dashboard", (req,res) => {
    res.send('this is dashboard');
})

app.get("/admin", (req,res) => {
    res.send('panel admin');
})

app.use((req,res) => {
    res.status(404).send('No se ha encontrado la pagina')
})

app.listen(3000);