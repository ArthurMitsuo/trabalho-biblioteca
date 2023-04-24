require('./mongoDB');

const statusModel = require('../models/statusModel');
const status = require('./status.json');

const categoriaModel = require('../models/categoriaModel');
const categoria = require('./categoria.json');

function carregarDados(){
    statusModel.deleteMany({}, () => {
        status.forEach(stat => {
            statusModel.create(stat);
        })
    })
    categoriaModel.deleteMany({}, () => {
        categoria.forEach(cat => {
            categoriaModel.create(cat);
        })
    })
}

carregarDados();
setTimeout(process.exit, 3000);


