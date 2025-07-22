const mongoose = require('mongoose');

const AvaliacaoSchema = new mongoose.Schema({
  utilizador: {
    type: String,
    required: true,
  },
  comentario: {
    type: String,
  },
  pontuacao: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
});

const LivroSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  anoPublicacao: {
    type: Number,
  },
  genero: {
    type: String,
  },
  autorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Autor',
    required: true,
  },
  avaliacoes: [AvaliacaoSchema],
});

module.exports = mongoose.model('Livro', LivroSchema); 