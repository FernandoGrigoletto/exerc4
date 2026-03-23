import express from 'express';
import disciplinaRoutes from './routes/disciplinaRoutes.js'; // ⚠️ IMPORTANTE: Adicione o .js no final do caminho

const app = express();
const PORT = 3000;

app.use(express.json());

// Rota principal para teste rápido
app.get('/', (req, res) => {
    res.send('API de Disciplinas rodando com ES Modules!');
});

app.use('/disciplinas', disciplinaRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando com sucesso na porta ${PORT}`);
    console.log(`Acesse: http://localhost:${PORT}/disciplinas`);
});
