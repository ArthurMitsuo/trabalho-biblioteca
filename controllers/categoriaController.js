const categoria = require('../db/mongoDB');
const categoriaModel = require('../models/categoriaModel');

class CategoriaController {
    async salvar(req, res){
        const max = await categoriaModel.findOne({}).sort({codigoCategoria: -1});

        const categoria = req.body;
        
        categoria.codigoCategoria = max == null ? 1 : max.codigoCategoria + 1;

        const resultado = await categoriaModel.create(categoria);
        console.log(res.status());
        res.status(201).json(req.body);
    }

    async listar(req, res){
        const resultado = await categoriaModel.find({});
        res.status(200).json(resultado);
    }

    async buscarPorCodigo(req, res){
        const codigoCategoria = req.params.codigoCategoria;
        const resultado = await categoriaModel.findOne({'codigoCategoria': codigoCategoria});
        res.status(200).json(resultado);
    }
    
    async atualizar(req, res){
        const codigoCategoria = req.params.codigoCategoria;
        const categoria = req.body;
        //Para obter resultado usar , {new: true} após o código;
        await categoriaModel.findOneAndUpdate({'codigoCategoria': codigoCategoria}, status);
        res.status(200).send('Atualizado!');
    }

    async remover(req, res){
        const codigoStatus = req.params.codigoStatus;
        //_id é o id automaticamente gerado pelo mongo
        const _id = String((await livroModel.findOne({'codigoStatus':codigoStatus}))._id);
        let produto = req.body;
        //método findByInAndRemove precisa do id gerado pelo mongo, para buscar e atualizar
        await statusModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}
module.exports = new CategoriaController();    