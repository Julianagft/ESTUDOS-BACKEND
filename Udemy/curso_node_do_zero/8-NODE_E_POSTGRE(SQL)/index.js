import express from 'express';
import exphbs from 'express-handlebars';
import { Client } from 'pg';

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

const client = new Client({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_with_sql',
});

client.connect(function (err) {
    if (err) {
        console.error('Error connecting to the database', err);
    } 
    console.log('Connected to the database');

    app.listen(3001);
    
});