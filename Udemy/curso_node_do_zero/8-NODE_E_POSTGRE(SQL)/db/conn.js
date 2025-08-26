import pkg from 'pg';

const pool = new pkg.Pool({
    max: 10,
    host: 'localhost',
    user: 'postgres',
    password: '',
    database: 'nodemysql2'
});

export default pool;
