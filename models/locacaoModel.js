const mongoose = require('mongoose');
const livroSchema = require('./schema/livroSchema');
const clienteSchema = require('./schema/clienteSchema');
const funcionarioSchema = require('./schema/funcionarioSchema');

//Define o schema, salvando o Schema que o Mongoose disponibilizada em uma variável Schema
const Schema = mongoose.Schema;

//instancia um novo Schema, colocando as chaves e o tipo de dado do valor a ser guardado no DB.
const locacaoSchema = new Schema({
    codigoLocacao: {type: Number, required: [true, "Código é obrigatório"]},
    codigoLivro: {type: Number, required: [true, "Código do livro é obrigatório"]},
    cliente: clienteSchema,
    livros: [livroSchema],
    dataLocacao: { type: Date, default: Date.now() },
    dataDevolucao: { type: Date, required: [true, "Data de devolução é obrigatório"], min: Date.now() },
    funcionario: funcionarioSchema,
    statusId: {type: mongoose.Schema.Types.ObjectId, ref : 'status'}
});

//Cria o modelo
module.exports = mongoose.model('locacao', locacaoSchema);