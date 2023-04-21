const mongoose = require('mongoose');

//deixando 0.0.0.0 funcionou. Usando como localhost estava dando timeout;
const url = 'mongodb://0.0.0.0:27017/meubanco'; 
const db = mongoose.connect(url);
console.log(mongoose.connect(url));

mongoose.connection.on('connected', () => console.log('Conectado ao MongoDB!'));
mongoose.connection.on('error', (err) => console.log('Erro: '  + err));

module.exports = db;