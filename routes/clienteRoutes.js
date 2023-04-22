const express = require('express');
const router = express.Router();

const clienteController = require('../controllers/clienteController');

router.get('/clientes', clienteController.listar);
router.get('/clientes/:idCliente', clienteController.buscarPorId);
router.post('/clientes', clienteController.salvar);
router.put('/clientes/:idCliente', clienteController.atualizar);
router.delete('/clientes/:idCliente', clienteController.remover);

module.exports = router;