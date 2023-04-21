const express = require('express');

const livroController = require('../controllers/livroController');

const router = express.Router();

router.get('/livro', livroController.listar);
router.get('/livro:id', livroController.buscarPorCodigo);
router.post('/livro', livroController.salvar);
router.put('/livro:id', livroController.atualizar);
router.delete('/livro:id', livroController.excluir);

module.exports = router;