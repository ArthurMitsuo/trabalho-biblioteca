const funcionarios = require('../db/mongoDB');
const funcionarioModel = require('../models/funcionarioModel');

class FuncionarioController{
    async salvar(req, res){
        //variável abaixo pega o livro módel, tenta achar algo sem nenhum critério de busca, ordenando pelo id (-1 indica ser ordem decrescente)
        const max = await funcionarioModel.findOne({}).sort({idFuncionario: -1});

        const funcionario = req.body;
        
        funcionario.idfuncionario = max == null ? 1 : max.idFuncionario + 1;

        const resultado = await funcionarioModel.create(funcionario);
        
        res.status(201).json(resultado);  
    }

    async listar(req, res){
        const resultado = funcionarioModel.find({});
        res.status(201).json(resultado);
    }

    async buscarPorId(req, res){
        const id = req.params.idFuncionario;
        const resultado = funcionarioModel.findOne({'id':id});
        res.status(201).send(resultado);
    }

    async atualizar(req, res){
        const id = req.params.idFuncionario;
        //_id é o id automaticamente gerado pelo mongo
        const _id = String((await funcionarioModel.findOne({'id':id}))._id);
        let produto = req.body;
        //método findByInAndUpdate precisa do id gerado pelo mongo, para buscar e atualizar
        await funcionarioModel.findByIdAndUpdate(String(_id), produto);
        res.status(200).send('Atualizado!');
    }

    async remover(req, res){

    }    
}
module.exports = new FuncionarioController();