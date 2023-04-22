const clientes = require('../db/mongoDB');
const clienteModel = require('../models/clienteModel');

class ClienteController {
    async salvar(req, res){
        //variável abaixo pega o livro módel, tenta achar algo sem nenhum critério de busca, ordenando pelo id (-1 indica ser ordem decrescente)
        const max = await clienteModel.findOne({}).sort({idCliente: -1});

        const cliente = req.body;
        
        cliente.idcliente = max == null ? 1 : max.idCliente + 1;

        const resultado = await clienteModel.create(cliente);
        
        res.status(201).json(resultado); 
    }

    async listar(req, res){
        const resultado = await clienteModel.find({});
        res.status(200).json(resultado);
    }

    async buscarPorId(req, res){
    const id = req.params.idCliente;
    const resultado = clienteModel.findOne({'id':id});
    res.status(201).send(resultado);
    }

    async atualizar(req, res){
        const pessoa = req.body;
        const indice = clientes.findIndex(p => p.id == req.params.id);
        if(indice >= 0){
            clientes[indice] = pessoa;
        } else {
            clientes.push(pessoa);
        }
        res.json(pessoa);
    }

    async remover(req, res){
        const indice = clientes.findIndex(p => p.id == req.params.id);
        if(indice >= 0){
        clientes.splice(indice, 1);
        }
        res.status(204).end();
    }
};

module.exports = new ClienteController();