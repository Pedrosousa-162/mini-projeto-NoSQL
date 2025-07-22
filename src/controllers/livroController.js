const Livro = require('../models/Livro');
const Autor = require('../models/Autor');

exports.criarLivro = async (req, res) => {
  try {
    const autor = await Autor.findById(req.body.autorId);
    if (!autor) {
      return res.status(404).send({ error: 'Autor não encontrado.' });
    }
    const livro = new Livro(req.body);
    await livro.save();
    res.status(201).send(livro);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.listarLivros = async (req, res) => {
  try {
    const livros = await Livro.find().populate('autorId', 'nome');
    res.status(200).send(livros);
  } catch (error) {
    res.status(500).send(error);
  }
}; 