const mongoose = require('mongoose');

//Cria a conexão com o banco de dados do MongoDB em localhost e exporta a conexão para os outros módulos

//deixando 0.0.0.0 funcionou. Usando como localhost estava dando timeout;
const url = 'mongodb://0.0.0.0:27017/meubanco'; 
const db = mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const con = mongoose.connection;

con.on('connected', () => console.log('Conectado ao MongoDB!'));
con.on('error', (err) => console.log('Erro: '  + err));
con.on('close', () => console.log('Desconectado do MongoDB'));


module.exports = db;