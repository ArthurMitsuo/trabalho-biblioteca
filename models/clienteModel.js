const mongoose = require('mongoose');

//Define o schema das pessoas(cliente)
const Schema = mongoose.Schema;

const clienteSchema = new Schema({
    idCliente: Number,
    cpfCliente: String,
    nome: String,
    sobrenome: String,
    endereço: String,
    numero: String,
    bairro: String,
    cidade: String,
    estado: String,
    dataNascimento: Date,
    dataCadastro: Date
});

//Cria o modelo
module.exports = mongoose.model('cliente', clienteSchema);