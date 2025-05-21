import express from 'express';
import exphbs from 'express-handlebars';
import { Client } from 'pg';

const app = express();

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json());

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/books/insertbook', (req, res) => {
    const title = req.body.title;
    const pages = req.body.pages;

    const query = `INSERT INTO books (title, page) VALUES ('${title}', '${pages}')`;

    client.query(query, function (err) {
        if (err) {
            console.error('Error inserting book', err);
            return res.status(500).send('Error inserting book');
        }
        res.redirect('/books');
    });
});

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: 'Lobinho1!',
    database: 'node_with_sql',
});

client.connect(function (err) {
    if (err) {
        console.error('Error connecting to the database', err);
    } 
    console.log('Connected to the database');

    app.listen(3001);
    
});