
const pool = require('../config/db');

async function listar(req, res) {
    try {
        const [rows] = await pool.query('SELECT * FROM disciplinas');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar disciplinas no banco de dados' });
    }
    
}
module.exports = { listar };
