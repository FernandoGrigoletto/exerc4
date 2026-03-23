const pool = require('../config/db');

async function listen(req, res) {
    try {
        const [rows] = await pool.query('SELECT * FROM disciplinas');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar disciplinas' });
    }
}

module.exports = {
    listen
};
