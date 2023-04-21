const mongoose = require('mongoose');

//Define o schema
const Schema = mongoose.Schema;

const locacaoSchema = new Schema({
    ifLocacao: Number,
    idLivro: Number,
    cpfCliente: Number,
    dataLocacao: Date,
    dataDevolucao: Date,
    codigoFuncionario:Number
});

//Cria o modelo
module.exports = mongoose.model('locacao', locacaoSchema);