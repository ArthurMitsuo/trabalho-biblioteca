const express = require('express');
const router = express.Router();

const locacaoController = require('../controllers/locacaoController');

router.get('/', locacaoController.listar);
router.get('/:codigoLocacao', locacaoController.buscarPorCodigo);
router.post('/', locacaoController.salvar);
router.put('/:codigoLocacao', locacaoController.atualizar);
router.delete('/:codigoLocacao', locacaoController.remover);

module.exports = router;