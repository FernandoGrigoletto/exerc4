import pool from '../config/db.js'; // Adicione o .js no final

export async function listar(req, res) {
    try {
        const [rows] = await pool.query('SELECT * FROM disciplinas');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar disciplinas no banco de dados' });
    }
}
