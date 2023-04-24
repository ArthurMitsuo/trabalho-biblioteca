const mongoose = require('mongoose');

//Define o schema, salvando o Schema que o Mongoose disponibilizada em uma variável Schema
const Schema = mongoose.Schema;

//instancia um novo Schema, colocando as chaves e o tipo de dado do valor a ser guardado no DB.
const livroSchema = new Schema({
    codigoLivro:  {type: Number, required: [true, "Código é obrigatório"]},
    nome: {type: String, required: [true, "Nome é obrigatório"], uppercase: true},
    autor: {type: String, required: [true, "Nome Autor é obrigatório"], uppercase: true},
    sinopse: String,
    paginas: {type: Number, required: [true, "Quantidade de páginas é obrigatório"], min: 1},
    quantidade: {type: Number, required: [true, "Quantidade disponível é obrigatório"]},
    editora: {type: String, required: [true, "Editora é obrigatório"], uppercase: true},
    dataPublicacao: Date,
    dataCadastro: { type: Date, required: [true, "Data do cadastro é obrigatório"], default: Date.now() },
    codigoCategoria: {type: mongoose.Schema.Types.ObjectId, ref: 'categoria'} 
});

//Cria o modelo
module.exports = livroSchema;