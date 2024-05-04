const express = require('express');
const app = express();

const PORT = 3000;

let test

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html' )
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});