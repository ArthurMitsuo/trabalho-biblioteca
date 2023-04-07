const pessoaController = require('./controllers/pessoaController');
const express = require('express');

const srv = express();

srv.use(express.json());

srv.get('/pessoas', pessoaController.listar);
srv.get('/pessoas/:id', pessoaController.buscarPorId);
srv.post('/pessoas', pessoaController.salvar);
srv.put('/pessoas/:id', pessoaController.atualizar);
srv.delete('/pessoas/:id', pessoaController.remover);

srv.listen(3000, () => {
console.log('Servidor rodando em http://localhost:3000');
});


//Testando conexão com o banco
require('./db/mongoDB');
const mongoose = require('mongoose');
const ModeloExemplo = mongoose.model("Exemplo", {name: String});
const objetoExemplo = new ModeloExemplo({name: "Um exemplo"});
objetoExemplo.save().then(() => console.log("Salvou!"));