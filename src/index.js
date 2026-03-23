const express = require('express');
const displinaRoutes = require('./routes/disciplinaRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/disciplinas', displinaRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
