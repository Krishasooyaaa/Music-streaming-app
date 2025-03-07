const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const songs = [
    { title: "Blinding Lights", artist: "The Weeknd" },
    { title: "Levitating", artist: "Dua Lipa" },
    { title: "Peaches", artist: "Justin Bieber" }
];

app.get('/songs', (req, res) => {
    res.json(songs);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});