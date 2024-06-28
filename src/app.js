const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Determina o diretório base usando process.cwd() para compatibilidade
const viewsPath = path.join(__dirname, 'views');
app.use(express.static(viewsPath));

// Servir o arquivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(viewsPath, 'index.html'));
});

// Iniciar o servidor apenas se este arquivo for o principal
if (require.main === module) {
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Servidor rodando em http://0.0.0.0:${PORT}`);
    });
}

module.exports = app;
