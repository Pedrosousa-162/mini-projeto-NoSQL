const mongoose = require('mongoose');

const AutorSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  nacionalidade: {
    type: String,
  },
  dataNascimento: {
    type: Date,
  },
});

module.exports = mongoose.model('Autor', AutorSchema); 