const express = require('express');
const { getAllMessages } = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use(express.static('server/public/'));

app.get('/api', (req, res) => {
  res.send('test');
});

app.get('/api/messages', (req, res) => {
  getAllMessages()
    .then((messages) => {
      res.json(messages);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

// app.get('/api/songs', (req, res) => {
//   getAllSongs()
//     .then((songs) => {
//       res.json(songs);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json({ error: 'An unexpected error occurred' });
//     });
// });

// app.post('/api/songs', (req, res) => {
//   const song = req.body;
//   createSong(song)
//     .then((song) => {
//       res.json(song);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json({ error: 'An unexpected error occurred' });
//     });
// });
