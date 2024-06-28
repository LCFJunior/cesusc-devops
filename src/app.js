import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3000;

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

export default app;
