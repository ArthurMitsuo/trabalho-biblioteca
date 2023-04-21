const livros = require('../db/mongoDB');
const livroModel = require('../models/livroModel');

class LivroController {
    async listar(req, res){
        const resultado = await livroModel.find({});
        res.status(200).json(resultado);
    }
    async buscarPorCodigo(req, res){
        const codigo = req.params.codigo;
        const resultado = await livroModel.findOne({'codigo': codigo});
        res.status(200).json(resultado);
    }
    async salvar(req, res){
        const livro = req.body;
        //Busca maior código no banco e gera novo código;
        const objeto = await livroModel.findOne({}).sort({'codigo': -1});
        livro.codigo = objeto == null ? 1 : objeto.codigo + 1;
        const resultado = await livroModel.create(livro);
        res.status(201).json(resultado);
    }
    async atualizar(req, res){
        const codigo = req.params.codigo;
        const livro = req.body;
        //Para obter resultado usar , {new: true} após o código;
        await livroModel.findOneAndUpdate({'codigo': codigo}, livro);
        res.status(200).send('Atualizado!');
    }
    async excluir(req, res){
        const codigo = req.params.codigo;
        await livroModel.findOneAndDelete({'codigo': codigo});

        res.status(200).send('Excluído!');
    }
}
module.exports = new LivroController();    