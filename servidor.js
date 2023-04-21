const pessoaController = require('./controllers/pessoaController');
const express = require('express');
const livroRouter = require('./routes/livroRoutes');


const livroRouter = require('./routes/livroRoutes');

const clienteController = require('./controllers/clienteController');
const express = require('express');

const mongoose = require('mongoose');

const srv = express();

srv.use(express.json());

srv.use('/livro', livroRouter);

srv.get('/pessoas', clienteController.listar);
srv.get('/pessoas/:id', clienteController.buscarPorId);
srv.post('/pessoas', clienteController.salvar);
srv.put('/pessoas/:id', clienteController.atualizar);
srv.delete('/pessoas/:id', clienteController.remover);

srv.listen(3000, () => {
console.log('Servidor rodando em http://localhost:3000');
});


//Testando conexão com o banco
require('./db/mongoDB');
const ModeloExemplo = mongoose.model("Exemplo", {name: String});
const objetoExemplo = new ModeloExemplo({name: "Um exemplo"});
objetoExemplo.save().then(() => console.log("Salvou!"));