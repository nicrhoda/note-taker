const { json } = require('express');
const express = require('express');
const fs = require('fs');
const PORT = process.env.PORT || 3001;
const app = express();
const jsonNotes = require('./Develop/db/db.json');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('./'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});
app.get('/notes', (req, res) =>  {
    res.sendFile(path.join(__dirname, 'Develop/public/notes.html'));
});

app.get('/api/notes', (req, res) => {
    res.json(jsonNotes);
});



app.listen(PORT, () => console.log('server listening on ' + PORT));