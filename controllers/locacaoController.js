const locacoes = require('../db/mongoDB');
const locacaoModel = require('../models/locacaoModel');

class LocacaoController{
    async salvar(req, res){
        //variável abaixo pega o livro módel, tenta achar algo sem nenhum critério de busca, ordenando pelo id (-1 indica ser ordem decrescente)
        const max = await locacaoModel.findOne({}).sort({codigoLocacao: -1});

        const locacao = req.body;
        
        locacao.codigoLocacao = max == null ? 1 : max.codigoLocacao + 1;

        const resultado = await locacaoModel.create(locacao);
        
        res.status(201).json(resultado);    
    }

    async listar(req, res){
        const resultado = await locacaoModel.find({});
        res.status(201).json(resultado);
    }

    async buscarPorCodigo(req, res){
        //pega o parâmetro passado na URL; recupero o parâmetro que estou passando para a constante
        const codigo = req.params.codigoLocacao;
        const resultado = await locacaoModel.findOne({'codigoLocacao': codigo});
        res.status(200).json(resultado);
    }

    async atualizar(req, res){
        const codigo = req.params.codigoLocacao;
        //_id é o id automaticamente gerado pelo mongo
        const _id = String((await locacaoModel.findOne({'codigoLocacao':codigo}))._id);
        let produto = req.body;
        //método findByInAndUpdate precisa do id gerado pelo mongo, para buscar e atualizar
        await locacaoModel.findByIdAndUpdate(String(_id), produto);
        res.status(200).send();
    }

    async remover(req, res){
        const codigo = req.params.codigoLocacao;
        //_id é o id automaticamente gerado pelo mongo
        const _id = String((await locacaoModel.findOne({'codigoLocaca':codigo}))._id);
        let produto = req.body;
        //método findByInAndRemove precisa do id gerado pelo mongo, para buscar e atualizar
        await locacaoModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new LocacaoController();