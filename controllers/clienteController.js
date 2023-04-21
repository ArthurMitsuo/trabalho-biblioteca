const clientes = require('../db/mongoDB');
const clienteModel = require('../models/clienteModel');

class ClienteController {
listar(req, res){
    res.json(clientes);
}
buscarPorId(req, res){
const pessoa = clientes.find(p => p.id == req.params.id);
res.json(pessoa);
}
salvar(req, res){
    clientes.push(req.body);
    res.json(pessoa);
    }
atualizar(req, res){
    const pessoa = req.body;
    const indice = clientes.findIndex(p => p.id == req.params.id);
    if(indice >= 0){
        clientes[indice] = pessoa;
    } else {
        clientes.push(pessoa);
    }
    res.json(pessoa);
}
remover(req, res){
    const indice = clientes.findIndex(p => p.id == req.params.id);
    if(indice >= 0){
      clientes.splice(indice, 1);
    }
    res.status(204).end();
}

};

module.exports = new ClienteController();