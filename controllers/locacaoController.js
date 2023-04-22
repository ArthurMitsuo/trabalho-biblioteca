const locacoes = require('../db/mongoDB');
const locacaoModel = require('../models/locacaoModel');

class LocacaoController{
    async salvar(req, res){
        //variável abaixo pega o livro módel, tenta achar algo sem nenhum critério de busca, ordenando pelo id (-1 indica ser ordem decrescente)
        const max = await locacaoModel.findOne({}).sort({idLocacao: -1});

        const locacao = req.body;
        
        locacao.idlocacao = max == null ? 1 : max.idLocacao + 1;

        const resultado = await locacaoModel.create(locacao);
        
        res.status(201).json(resultado);    
    }

    async listar(req, res){
        const resultado = await locacaoModel.find({});
        res.status(201).json(resultado);
    }

    async buscarPorId(req, res){
        //pega o parâmetro passado na URL; recupero o parâmetro que estou passando para a constante
        const id = req.params.idLocacao;
        const resultado = await locacaoModel.findOne({'id': id});
        res.status(201).send(resultado);
    }

    async atualizar(req, res){
        const id = req.params.idLocacao;
        //_id é o id automaticamente gerado pelo mongo
        const _id = String((await locacaoModel.findOne({'id':id}))._id);
        let produto = req.body;
        //método findByInAndUpdate precisa do id gerado pelo mongo, para buscar e atualizar
        await locacaoModel.findByIdAndUpdate(String(_id), produto);
    }

    async remover(req, res){

    }
}

module.exports = new LocacaoController();