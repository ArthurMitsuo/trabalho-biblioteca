const mongoose = require('mongoose');

//Define o schema, salvando o Schema que o Mongoose disponibilizada em uma variável Schema
const Schema = mongoose.Schema;

//instancia um novo Schema, colocando as chaves e o tipo de dado do valor a ser guardado no DB.
const funcionarioSchema = new Schema({
    codigoFuncionario:  {type: Number, required: [true, "Código é obrigatório"]},
    cpfFuncionario: {type: String, required: [true, "CPF é obrigatório"]},
    nome: {type: String, required: [true, "Nome é obrigatório"], uppercase: true},
    sobrenome: {type: String, required: [true, "Sobrenome é obrigatório"], uppercase: true},
    dataNascimento: {type: Date, required: [true, "Data de Nascimento é obrigatório"]},
    cep: {type: String, required: [true, "CEP é obrigatório"]},
    endereco: {type: String, uppercase: true},
    bairro: {type: String, uppercase: true},
    cidade: {type: String, uppercase: true},
    estado: {type: String, uppercase: true},
});

//Cria o modelo
module.exports = funcionarioSchema;