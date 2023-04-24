const express = require('express');
const router = express.Router();

const statusController = require('../controllers/statusController');

router.get('/', statusController.listar);
router.get('/:codigoStatus', statusController.buscarPorCodigo);
router.post('/', statusController.salvar);
router.put('/:codigoStatus', statusController.atualizar);
router.delete('/:codigoStatus', statusController.remover);

module.exports = router;