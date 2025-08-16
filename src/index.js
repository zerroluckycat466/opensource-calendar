const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mongoose verbinden
mongoose.connect('mongodb://localhost:27017/kalender', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB verbunden')).catch(err => console.error(err));

app.get('/', (req, res) => {
  res.send('Willkommen bei Open Source Kalender!');
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
