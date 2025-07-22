const express = require('express');
const router = express.Router();
const autorController = require('../controllers/autorController');

router.post('/autores', autorController.criarAutor);

module.exports = router; 