const categoria = require('../db/mongoDB');
const categoriaModel = require('../models/categoriaModel');

class CategoriaController {
    async salvar(req, res){
        //Busca maior código no banco e gera novo código;
        //variável abaixo pega o livro módel, tenta achar algo sem nenhum critério de busca, ordenando pelo id (-1 indica ser ordem decrescente)
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
        const codigoCategoria = req.params.codigoCategoria;
        //_id é o id automaticamente gerado pelo mongo
        const _id = String((await categoriaModel.findOne({'codigoCategoria':codigoCategoria}))._id);
        let categoria = req.body;
        //método findByInAndRemove precisa do id gerado pelo mongo, para buscar e atualizar
        await categoriaModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}
module.exports = new CategoriaController();    