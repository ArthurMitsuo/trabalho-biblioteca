const express = require('express');
const router = express.Router();

const funcionarioController = require('../controllers/funcionarioController');

router.get('/', funcionarioController.listar);
router.get('/:codigoFuncionario', funcionarioController.buscarPorCodigo);
router.post('/', funcionarioController.salvar);
router.put('/:codigoFuncionario', funcionarioController.atualizar);
router.delete('/:codigoFuncionario', funcionarioController.remover);

module.exports = router;