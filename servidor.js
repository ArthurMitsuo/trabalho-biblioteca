require('./db/mongoDB');
const express = require('express');
const mongoose = require('mongoose');

//Importando os routes
const livroRouter = require('./routes/livroRoutes');
const clienteRouter = require('./routes/clienteRoutes');
const indexRouter = require('./routes/indexRoutes');
const funcionarioRouter = require('./routes/funcionarioRoutes');
const statusRouter = require('./routes/statusRoutes');
const categoriaRouter = require('./routes/categoriaRoutes');
const locacaoRouter = require('./routes/locacaoRoutes');

//definindo a constante srv como instância do objeto requerido do express
const srv = express();

srv.use(express.json());

//Solicitando que o servidor utilize os routers conforme os valor pós / na URL
srv.use('/', indexRouter);
srv.use('/livros', livroRouter);
srv.use('/clientes', clienteRouter);
srv.use('/funcionario', funcionarioRouter);
srv.use('/status', statusRouter);
srv.use('/categorias', categoriaRouter);
srv.use('/locacao', locacaoRouter);

//Verificando se o servidor está de pé na porta 3000, se sim, irá imprimir no console
srv.listen(3000, () => {
console.log('Servidor rodando em http://localhost:3000');
});
