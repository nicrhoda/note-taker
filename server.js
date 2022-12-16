
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const jsonNotes = require('./db/db.json');
const path = require('path');
const { json } = require('express');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});
app.get('/notes', (req, res) =>  {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/api/notes', (req, res) => {
    res.json(jsonNotes);
});

app.post('/api/notes', (req, res) => {
    
});




app.listen(PORT, () => console.log('server listening on ' + PORT));