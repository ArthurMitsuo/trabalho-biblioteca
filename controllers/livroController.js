const livros = require('../db/mongoDB');
const livroModel = require('../models/livroModel');

class LivroController {
    async salvar(req, res){
        //Busca maior código no banco e gera novo código;
        //variável abaixo pega o livro módel, tenta achar algo sem nenhum critério de busca, ordenando pelo id (-1 indica ser ordem decrescente)
        const max = await livroModel.findOne({}).sort({idLivro: -1});

        const livro = req.body;
        
        livro.idLivro = max == null ? 1 : max.idLivro + 1;

        const resultado = await livroModel.create(livro);

        res.status(201).json(resultado);
    }

    async listar(req, res){
        const resultado = await livroModel.find({});
        res.status(200).json(resultado);
    }

    async buscarPorCodigo(req, res){
        const id = req.params.idLivro;
        const resultado = await livroModel.findOne({'id': id});
        res.status(200).json(resultado);
    }
    
    async atualizar(req, res){
        const codigo = req.params.codigo;
        const livro = req.body;
        //Para obter resultado usar , {new: true} após o código;
        await livroModel.findOneAndUpdate({'codigo': codigo}, livro);
        res.status(200).send('Atualizado!');
    }

    async remover(req, res){
        const codigo = req.params.codigo;
        await livroModel.findOneAndDelete({'codigo': codigo});

        res.status(200).send('Excluído!');
    }
}
module.exports = new LivroController();    