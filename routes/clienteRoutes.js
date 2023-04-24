const express = require('express');
const router = express.Router();

const clienteController = require('../controllers/clienteController');

router.get('/', clienteController.listar);
router.get('/:codigoCliente', clienteController.buscarPorCodigo);
router.post('/', clienteController.salvar);
router.put('/:codigoCliente', clienteController.atualizar);
router.delete('/:codigoCliente', clienteController.remover);

module.exports = router;