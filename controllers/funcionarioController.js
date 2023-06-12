const funcionarios = require('../db/mongoDB');
const funcionarioModel = require('../models/funcionarioModel');

class FuncionarioController{
    async salvar(req, res){
        //variável abaixo pega o livro módel, tenta achar algo sem nenhum critério de busca, ordenando pelo id (-1 indica ser ordem decrescente)
        const max = await funcionarioModel.findOne({}).sort({codigoFuncionario: -1});

        const funcionario = req.body;
        
        funcionario.codigoFuncionario = max == null ? 1 : max.codigoFuncionario + 1;

        const resultado = await funcionarioModel.create(funcionario);
        console.log(res.status());
        res.status(201).json(funcionario);  
    }

    async listar(req, res){
        const resultado = await funcionarioModel.find({});
        res.status(201).json(resultado);
    }

    async buscarPorCodigo(req, res){
        const codigoFuncionario = req.params.codigoFuncionario;
        const resultado = funcionarioModel.findOne({'codigoFuncionario':codigoFuncionario});
        res.status(201).send(resultado);
    }

    async atualizar(req, res){
        const codigo = req.params.codigoFuncionario;
        //_id é o id automaticamente gerado pelo mongo
        const _id = String((await funcionarioModel.findOne({'codigoFuncionario':codigo}))._id);
        let funcionario = req.body;
        //método findByInAndUpdate precisa do id gerado pelo mongo, para buscar e atualizar
        await funcionarioModel.findByIdAndUpdate(String(_id), funcionario);
        res.status(200).send('Atualizado!');
    }

    async remover(req, res){
        const codigo = req.params.codigoFuncionario;
        //_id é o id automaticamente gerado pelo mongo
        const _id = String((await funcionarioModel.findOne({'codigoFuncionario':codigo}))._id);
      
        //método findByInAndRemove precisa do id gerado pelo mongo, para buscar e atualizar
        await funcionarioModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }    
}
module.exports = new FuncionarioController();