const produtoModel = require('../models/livroModel');
class ProdutoController {
    async listar(req, res){
        const resultado = await produtoModel.find({});
        res.status(200).json(resultado);
    }
    async buscarPorCodigo(req, res){
        const codigo = req.params.codigo;
        const resultado = await produtoModel.findOne({'codigo': codigo});
        res.status(200).json(resultado);
    }
    async salvar(req, res){
        const produto = req.body;
        //Busca maior código no banco e gera novo código;
        const objeto = await produtoModel.findOne({}).sort({'codigo': -1});
        produto.codigo = objeto == null ? 1 : objeto.codigo + 1;
        const resultado = await produtoModel.create(produto);
        res.status(201).json(resultado);
    }
    async atualizar(req, res){
        const codigo = req.params.codigo;
        const produto = req.body;
        //Para obter resultado usar , {new: true} após o código;
        await produtoModel.findOneAndUpdate({'codigo': codigo}, produto);
        res.status(200).send('Atualizado!');
    }
    async excluir(req, res){
        const codigo = req.params.codigo;
<<<<<<< HEAD:controllers/livroController.js
        await produtoModel.findOneAndDelete(({'codigo': codigo}));
=======
        await produtoModel.findOneAndDelete({'codigo': codigo});
>>>>>>> 60f1ed64127607094e7a3f9a66300ff63f6ef198:controllers/produtoController.js
        res.status(200).send('Excluído!');
    }
}
module.exports = new ProdutoController();    