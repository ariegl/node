const express = require('express');

const app = express();

app.get('/products', (req,res) => {
    res.send('lista de productos');
})

app.post('/products', (req,res) => {
    res.send('creando productos');
})

app.put('/products', (req,res) => {
    res.send('actualizando un producto');
})


app.delete('/products', (req,res) => {
    res.send('Eliminando un producto');
})

app.patch('/products', (req,res) => {
    res.send('Actualizando una parte del producto');
})


app.listen(3000);