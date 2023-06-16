const status = require('../db/mongoDB');
const statusModel = require('../models/statusModel');

class StatusController {
    async salvar(req, res){
        //Busca maior código no banco e gera novo código;
        //variável abaixo pega o livro módel, tenta achar algo sem nenhum critério de busca, ordenando pelo id (-1 indica ser ordem decrescente)
        const max = await statusModel.findOne({}).sort({codigoStatus: -1});

        const status = req.body;
        
        status.codigoStatus = max == null ? 1 : max.codigoStatus + 1;

        const resultado = await statusModel.create(status);
        console.log(res.status());
        res.status(201).json(req.body);
    }

    async listar(req, res){
        const resultado = await statusModel.find({});
        res.status(200).json(resultado);
    }

    async buscarPorCodigo(req, res){
        const codigoStatus = req.params.codigoStatus;
        const resultado = await statusModel.findOne({'codigoStatus': codigoStatus});
        res.status(200).json(resultado);
    }
    
    async atualizar(req, res){
        const codigoStatus = req.params.codigoStatus;
        const status = req.body;
        //Para obter resultado usar , {new: true} após o código;
        await statusModel.findOneAndUpdate({'codigoStatus': codigoStatus}, status);
        res.status(200).send('Atualizado!');
    }

    async remover(req, res){
        const codigoStatus = req.params.codigoStatus;
        //_id é o id automaticamente gerado pelo mongo
        const _id = String((await statusModel.findOne({'codigoStatus':codigoStatus}))._id);
        let produto = req.body;
        //método findByInAndRemove precisa do id gerado pelo mongo, para buscar e atualizar
        await statusModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}
module.exports = new StatusController();    