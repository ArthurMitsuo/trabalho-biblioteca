require('./db/mongoDB');
const express = require('express');
const mongoose = require('mongoose');

//Importando os routes
const livroRouter = require('./routes/livroRoutes');
const clienteRouter = require('./routes/clienteRoutes');

//definindo a constante srv como instância do objeto requerido do express
const srv = express();

//srv.use(express.json());

//Solicitando que o servidor utilize os routers conforme os valor pós / na URL
srv.use('/livro', livroRouter);
srv.use('/cliente', clienteRouter);

//Verificando se o servidor está de pé na porta 3000, se sim, irá imprimir no console
srv.listen(3000, () => {
console.log('Servidor rodando em http://localhost:3000');
});
