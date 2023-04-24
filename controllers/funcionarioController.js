const funcionarios = require('../db/mongoDB');
const funcionarioModel = require('../models/funcionarioModel');

class FuncionarioController{
    async salvar(req, res){
        //variável abaixo pega o livro módel, tenta achar algo sem nenhum critério de busca, ordenando pelo id (-1 indica ser ordem decrescente)
        const max = await funcionarioModel.findOne({}).sort({codigoFuncionario: -1});

        const funcionario = req.body;
        
        funcionario.codigoFuncionario = max == null ? 1 : max.codigoFuncionario + 1;

        const resultado = await funcionarioModel.create(funcionario);
        
        res.status(201).json(resultado);  
    }

    async listar(req, res){
        const resultado = funcionarioModel.find({});
        res.status(201).json(resultado);
    }

    async buscarPorCodigo(req, res){
        const codigo = req.params.codigoFuncionario;
        const resultado = funcionarioModel.findOne({'codigo':codigo});
        res.status(201).send(resultado);
    }

    async atualizar(req, res){
        const codigo = req.params.codigoFuncionario;
        //_id é o id automaticamente gerado pelo mongo
        const _id = String((await funcionarioModel.findOne({'codigo':codigo}))._id);
        let produto = req.body;
        //método findByInAndUpdate precisa do id gerado pelo mongo, para buscar e atualizar
        await funcionarioModel.findByIdAndUpdate(String(_id), produto);
        res.status(200).send('Atualizado!');
    }

    async remover(req, res){
        const codigo = req.params.codigoFuncionario;
        //_id é o id automaticamente gerado pelo mongo
        const _id = String((await funcionarioModel.findOne({'codigo':codigo}))._id);
        let produto = req.body;
        //método findByInAndRemove precisa do id gerado pelo mongo, para buscar e atualizar
        await funcionarioModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }    
}
module.exports = new FuncionarioController();