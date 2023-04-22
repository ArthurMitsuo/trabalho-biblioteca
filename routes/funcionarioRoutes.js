const express = require('express');
const router = express.Router();

const funcionarioController = require('../controllers/funcionarioController');

router.get('/funcionario', funcionarioController.listar);
router.get('/funcionario/:idFuncionario', funcionarioController.buscarPorId);
router.post('/funcionario', funcionarioController.salvar);
router.put('/funcionario/:idFuncionario', funcionarioController.atualizar);
router.delete('/funcionario/:idFuncionario', funcionarioController.remover);

module.exports = router;