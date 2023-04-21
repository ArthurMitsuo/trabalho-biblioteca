const express = require('express');

const clienteController = require('../controllers/clienteController');

const router = express.Router();

router.get('/clientes', clienteController.listar);
router.get('/clientes/:id', clienteController.buscarPorId);
router.post('/clientes', clienteController.salvar);
router.put('/clientes/:id', clienteController.atualizar);
router.delete('/clientes/:id', clienteController.remover);

module.exports = router;