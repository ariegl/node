const express = require('express');

const app = express();

app.get("/",(req,res) => {
    res.send('Aloh');
})

app.get("/image",(req,res) => {
    res.sendFile('./image.png',{
        root: __dirname
    });
})

app.get('/user',(req,res) => {
    res.json({
        'name' : 'ariel',
        'lastname' : 'F. G.',
        age: 40,
        points: [1, 2, 3],
        address: {
            country: 'México',
            city: 'Monterrey',
            street: 'emiliano zapata',
        }
    })
})

app.get('/isAlive',(req, res) => {
    res.sendStatus(204);
})

app.listen(3000);
console.log("SERVER ON PORT 3000");