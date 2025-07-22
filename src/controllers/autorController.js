const Autor = require('../models/Autor');

exports.criarAutor = async (req, res) => {
  try {
    const autor = new Autor(req.body);
    await autor.save();
    res.status(201).send(autor);
  } catch (error) {
    res.status(400).send(error);
  }
}; 