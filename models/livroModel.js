const mongoose = require('mongoose');

//Define o schema, salvando o Schema que o Mongoose disponibilizada em uma variável Schema
const Schema = mongoose.Schema;

//instancia um novo Schema, colocando as chaves e o tipo de dado do valor a ser guardado no DB.
const livroSchema = new Schema({
    idLivro: Number,
    nome: {type: String, uppercase: true},
    autor: {type: String, uppercase: true},
    sinopse: String,
    anoPublicacao: Date,
    editora: {type: String, uppercase: true},
    paginas: {type: Number, min: 1},
    quantidade: {type: Number, min: 1}
});

//Cria o modelo
module.exports = mongoose.model('livro', livroSchema);