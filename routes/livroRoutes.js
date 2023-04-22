const express = require('express');
const router = express.Router();

const livroController = require('../controllers/livroController');

router.get('/livro', livroController.listar);
router.get('/livro/:idLivro', livroController.buscarPorCodigo);
router.post('/livro', livroController.salvar);
router.put('/livro/:idLivro', livroController.atualizar);
router.delete('/livro/:idLivro', livroController.remover);

module.exports = router;