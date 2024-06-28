const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Define o diretório de arquivos estáticos para o Express
app.use(express.static(path.join(__dirname, 'views')));

// Rota para servir o arquivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

module.exports = app; // Exporta o aplicativo Express

// Inicia o servidor (opcionalmente, dependendo de como você está gerenciando isso)
if (require.main === module) {
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Servidor rodando em http://0.0.0.0:${PORT}`);
    });
}
