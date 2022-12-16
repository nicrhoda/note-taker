const fs = require('fs');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const jsonNotes = require('./db/db.json');
const path = require('path');
const { json } = require('express');
const uuid = require('./public/assets/js/uuid');

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
    let note = req.body;
    note.id = uuid();
    jsonNotes.push(note);
    fs.writeFile('./db/db.json', JSON.stringify(jsonNotes, null, 4) , (err) => {
        err ? console.log(err) : res.send(note)
    })
});





app.listen(PORT, () => console.log('server listening on ' + PORT));