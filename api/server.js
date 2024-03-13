// Kovács Attila
// szoft2/2/N
// 2024.03.13
// https://github.com/Attila732/orszagokListazasa

const hai = require('hai-server');
const orszagok = require('./orszagok.json');

const PORT ="http://localhost:3000"

const app = hai();

app.get('/orszagok', (req, res) => {
  res.send(orszagok);
});

app.get('/orszagok/:id', (req, res) => {
  const { id } = req.params;
  const orszagok = orszagok.find(orszagok => orszagok.id === parseInt(id));
  if (!orszagok) {
    res.status(404).send({ error: 'Country not found' });
  } else {
    res.send(orszagok);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
