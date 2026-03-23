// 1. Mudamos o require para import e adicionamos o .js no final
import pool from '../config/db.js'; 

// 2. Exportamos a função diretamente usando 'export'
export async function listen(req, res) {
    try {
        // Busca os dados no MySQL usando o pool que configuramos
        const [rows] = await pool.query('SELECT * FROM disciplinas');
        
        // Retorna os dados em formato JSON para o navegador/frontend
        res.json(rows);
    } catch (error) {
        console.error('Erro no Banco de Dados:', error);
        res.status(500).json({ error: 'Erro ao buscar disciplinas no banco de dados' });
    }
}
