const mongoose = require('mongoose');

//Define o schema
const Schema = mongoose.Schema;

const livroSchema = new Schema({
    idLivro: Number,
    nome: String,
    autor: String,
    sinopse: String,
    anoPublicacao: Date,
    editora: String,
    paginas: Number,
    quantidade: Number
});

//Cria o modelo
module.exports = mongoose.model('livro', livroSchema);