//TEM QUE EXECUTAR NO PROMPT PARA INSERIR OS DADOS DENTRO DO DB;

require('./mongoDB');

const statusModel = require('../models/statusModel');
const status = require('./status.json');

const categoriaModel = require('../models/categoriaModel');
const categoria = require('./categoria.json');

function carregarDados(){
    statusModel.deleteMany({})
    let insereStatus = () => {
        status.forEach(stat => {
            statusModel.create(stat);
        })
    }
    categoriaModel.deleteMany({});
    let insereCategoria = () => {
        categoria.forEach(cat => {
            categoriaModel.create(cat);
        })
    }

    insereStatus();
    insereCategoria();
}

carregarDados();
console.log("Dados carregados");
setTimeout(process.exit, 3000);