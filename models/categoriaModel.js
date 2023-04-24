const mongoose = require('mongoose');

//Define o schema, salvando o Schema que o Mongoose disponibilizada em uma variável Schema
const Schema = mongoose.Schema;

//instancia um novo Schema, colocando as chaves e o tipo de dado do valor a ser guardado no DB.
const categoriaSchema = new Schema({
    codigoCategoria: {type: Number, required: [true, "Código é obrigatório"]},
    nome: {type: String, required: [true, "Nome da categoria é obrigatório"]}
});

//Cria o modelo
module.exports = mongoose.model('categoria', categoriaSchema);