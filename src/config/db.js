import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: '147.15.78.7',
    user: 'remoto',
    password: '12345senha',
    database: 'exercicio4',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Exportação moderna para ES Modules
export default pool;
