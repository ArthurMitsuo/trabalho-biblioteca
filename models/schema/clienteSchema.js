const mongoose = require('mongoose');

//Define o schema, salvando o Schema que o Mongoose disponibilizada em uma variável Schema
const Schema = mongoose.Schema;

//instancia um novo Schema, colocando as chaves e o tipo de dado do valor a ser guardado no DB.
const clienteSchema = new Schema({
    codigoCliente:  {type: Number, required: [true, "Código é obrigatório"]},
    cpfCliente: {type: String, required: [true, "CPF é obrigatório"]},
    nome: {type: String, required: [true, "Nome é obrigatório"], uppercase: true},
    sobrenome: {type: String, required: [true, "Sobrenome é obrigatório"], uppercase: true},
    cep: {type: String, required: [true, "CEP é obrigatório"], uppercase: true},
    endereço: {type: String, uppercase: true},
    numero: {type: String, uppercase: true},
    bairro: {type: String, uppercase: true},
    cidade: {type: String, uppercase: true},
    estado: {type: String, uppercase: true},
    dataNascimento: {type: String, required: [true, "Data Nascimento é obrigatória"]},
    dataCadastro: {type: Date, default: Date.now()}
});

//Cria o modelo
module.exports = clienteSchema;