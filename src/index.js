const express = require('express');
const disciplinaRoutes = require('./disciplinaRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/disciplinas', disciplinaRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
