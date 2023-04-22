const mongoose = require('mongoose');

//Define o schema, salvando o Schema que o Mongoose disponibilizada em uma variável Schema
const Schema = mongoose.Schema;

//instancia um novo Schema, colocando as chaves e o tipo de dado do valor a ser guardado no DB.
const funcionarioSchema = new Schema({
    idFuncionario: Number,
    cpfFuncionario: String,
    nome: {type: String, uppercase: true},
    sobrenome: {type: String, uppercase: true},
    dataNascimento: Date,
    endereco: {type: String, uppercase: true},
    bairro: {type: String, uppercase: true},
    cidade: {type: String, uppercase: true},
    estado: {type: String, uppercase: true},
});

//Cria o modelo
module.exports = mongoose.model('funcionario', funcionarioSchema);