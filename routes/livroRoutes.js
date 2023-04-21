// ./routes/produtoRouter.js
const livroController = require('../controllers/livroController');

const express = require('express');
const router = express.Router();

router.get('/', livroController.listar);
router.get('/:id', livroController.buscarPorCodigo);

router.post('/', livroController.salvar);

router.put('/:id', livroController.atualizar);

router.delete('/:id', livroController.excluir);

module.exports = router;