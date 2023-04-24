const express = require('express');
const router = express.Router();

const categoriaController = require('../controllers/categoriaController');

router.get('/', categoriaController.listar);
router.get('/:codigoCategoria', categoriaController.buscarPorCodigo);
router.post('/', categoriaController.salvar);
router.put('/:codigoCategoria', categoriaController.atualizar);
router.delete('/:codigoCategoria', categoriaController.remover);

module.exports = router;