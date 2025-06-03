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

    const query = `INSERT INTO books (title, pages) VALUES ('${title}', '${pages}')`;

    client.query(query, function (err) {
        if (err) {
            console.error('Error inserting book', err);
            return res.status(500).send('Error inserting book');
        }
        res.redirect('/books');
    });
});

app.get('/books', (req, res) => {
    const query = 'SELECT * FROM books';

    client.query(query, function (err, result) {
        if (err) {
            console.error('Error fetching books', err);
            
            return res.status(500).send('Error fetching books');
        }

        const books = result.rows;
        console.log("books: ", books);

        res.render('books', { books });

    })
});

app.get('/books/:id', (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM books WHERE id = ${id}`;

    client.query(query, function (err, result) {
        if (err) {
            console.error('Error fetching book', err);
            return res.status(500).send('Error fetching book');
        }

        const book = result.rows[0];

        res.render('book', { book});
    }) 
});

app.get('/books/edit/:id', (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM books WHERE id = ${id}`;

    client.query(query, function (err, result) {
        if (err) {
            console.error('Error fetching book', err);
            return res.status(500).send('Error fetching book');
        }

        const book = result.rows[0];
        console.log("book: ", book);

        res.render('editbook', { book });
    }) 
});

app.post('/books/updatebook', (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const pages = req.body.pages;

    const query = `UPDATE books SET title = '${title}', pages = '${pages}' WHERE id = ${id}`;

    client.query(query, function (err) {
        if (err) {
            console.error('Error updating book', err);
            return res.status(500).send('Error updating book');
        }
        res.redirect('/books');
    });
});

app.post('/books/remove/:id', (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM books WHERE id = ${id}`;

    client.query(query, function (err) {
        if (err) {
            console.error('Error deleting book', err);
            return res.status(500).send('Error deleting book');
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