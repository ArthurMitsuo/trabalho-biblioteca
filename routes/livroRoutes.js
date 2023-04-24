const express = require('express');
const router = express.Router();

const livroController = require('../controllers/livroController');

router.get('/', livroController.listar);
router.get('/:codigoLivro', livroController.buscarPorCodigo);
router.post('/', livroController.salvar);
router.put('/:codigoLivro', livroController.atualizar);
router.delete('/:codigoLivro', livroController.remover);

module.exports = router;