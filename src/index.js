const express = require('express');
require('dotenv').config();
const connectDB = require('./config/database');
const autorRoutes = require('./routes/autorRoutes');
const livroRoutes = require('./routes/livroRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.use('/api', autorRoutes);
app.use('/api', livroRoutes);

app.listen(PORT, () => {
  console.log(`Servidor a correr na porta ${PORT}`);
}); 