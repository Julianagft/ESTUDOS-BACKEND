import pg from 'pg';

const pool  = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'newsletter',
    password:'col@123',
    port: 5432 // Porta padrão do Postgress
});

export default {
    query: (text, params) => pool.query(text, params)
}