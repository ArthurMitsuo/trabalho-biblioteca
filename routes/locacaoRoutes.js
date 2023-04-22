const express = require('express');
const router = express.Router();

const locacaoController = require('../controllers/locacaoController');

router.get('/locacao', locacaoController.listar);
router.get('/locacao/:id', locacaoController.buscarPorId);
router.post('/locacao', locacaoController.salvar);
router.put('/locacao/:id', locacaoController.atualizar);
router.delete('/locacao/:id', locacaoController.remover);

module.exports = router;