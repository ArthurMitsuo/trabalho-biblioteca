// ./routes/produtoRouter.js
const produtoController = require('../controllers/livroController');

const express = require('express');
const router = express.Router();

router.get('/', produtoController.listar);
router.get('/:id', produtoController.buscarPorCodigo);

router.post('/', produtoController.salvar);

router.put('/:id', produtoController.atualizar);

router.delete('/:id', produtoController.excluir);

module.exports = router;