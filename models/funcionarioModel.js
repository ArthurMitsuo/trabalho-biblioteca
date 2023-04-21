const mongoose = require('mongoose');

//Define o schema
const Schema = mongoose.Schema;

const funcionarioSchema = new Schema({
    idFuncionario: Number,
    cpfFuncionario: String,
    nome: String,
    sobrenome: String,
    dataNascimento: Date,
    endereco: String,
    bairro: String,
    cidade: String,
    estado: String,
});

//Cria o modelo
module.exports = mongoose.model('funcionario', funcionarioSchema);