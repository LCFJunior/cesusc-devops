const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const __dirname = path.resolve();
// Serve static files from the 'views' directory
const viewsPath = __dirname;
app.use(express.static(path.join(viewsPath, 'views')));

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(viewsPath, 'views', 'index.html'));
});

if (require.main === module) {
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Servidor rodando em http://0.0.0.0:${PORT}`);
    });
}

module.exports = app;
