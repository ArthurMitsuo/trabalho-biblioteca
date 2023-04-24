const clientes = require('../db/mongoDB');
const clienteModel = require('../models/clienteModel');

class ClienteController {
    async salvar(req, res){
        //variável abaixo pega o livro módel, tenta achar algo sem nenhum critério de busca, ordenando pelo id (-1 indica ser ordem decrescente)
        const max = await clienteModel.findOne({}).sort({codigoCliente: -1});

        const cliente = req.body;
        
        cliente.codigoCliente = max == null ? 1 : max.codigoCliente + 1;

        const resultado = await clienteModel.create(cliente);
        
        res.status(201).json(resultado); 
    }

    async listar(req, res){
        const resultado = await clienteModel.find({});
        res.status(200).json(resultado);
    }

    async buscarPorCodigo(req, res){
    const codigo = req.params.codigoCliente;
    const resultado = clienteModel.findOne({'codigo':codigo});
    res.status(201).send(resultado);
    }

    async atualizar(req, res){
        //método que estava nos slides, verificar após
        
        const pessoa = req.body;
        const indice = clientes.findIndex(p => p.codigo == req.params.codigo);
        if(indice >= 0){
            clientes[indice] = pessoa;
        } else {
            clientes.push(pessoa);
        }
        res.json(pessoa);
    }

    async remover(req, res){
        const indice = clientes.findIndex(p => p.codigo == req.params.codigo);
        if(indice >= 0){
        clientes.splice(indice, 1);
        }
        res.status(204).end();
    }
};

module.exports = new ClienteController();