import express from 'express';
import disciplinaRoutes from './disciplinaRoutes.js'; // Não esqueça o .js no final!

const app = express();
const PORT = 3000;

app.use(express.json());

// Rota principal para testar
app.get('/', (req, res) => {
    res.send('API de Disciplinas Rodando!');
});

app.use('/disciplinas', disciplinaRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
