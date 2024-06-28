const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Simula a variável __dirname
const __dirname = require('path').resolve();

// Define o diretório de arquivos estáticos para o Express
app.use(express.static(path.join(__dirname, 'views')));

// Rota para servir o arquivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
