const mongoose = require('mongoose');

//Define o schema, salvando o Schema que o Mongoose disponibilizada em uma variável Schema
const Schema = mongoose.Schema;

//instancia um novo Schema, colocando as chaves e o tipo de dado do valor a ser guardado no DB.
const locacaoSchema = new Schema({
    idLocacao: Number,
    idLivro: Number,
    cpfCliente: String,
    dataLocacao: { type: Date, default: Date.now() },
    dataDevolucao: { type: Date, min: Date.now() },
    codigoFuncionario:Number
});

//Cria o modelo
module.exports = mongoose.model('locacao', locacaoSchema);