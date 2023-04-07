const mongoose = require('mongoose');
//Define o schema

const Schema = mongoose.Schema;

const ProdutoSchema = new Schema({
    codigo: Number,
    nome: String,
    desc: String,
    preco: Number,
    peso: Number,
    foto: String
});

//Cria o modelo
module.exports = mongoose.model('produto', ProdutoSchema);