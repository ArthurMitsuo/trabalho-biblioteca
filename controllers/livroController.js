const livros = require('../db/mongoDB');
const livroModel = require('../models/livroModel');

class LivroController {
    async salvar(req, res){
        //Busca maior código no banco e gera novo código;
        //variável abaixo pega o livro módel, tenta achar algo sem nenhum critério de busca, ordenando pelo id (-1 indica ser ordem decrescente)
        const max = await livroModel.findOne({}).sort({codigoLivro: -1});

        const livro = req.body;
        
        livro.codigoLivro = max == null ? 1 : max.codigoLivro + 1;

        const resultado = await livroModel.create(livro);
        console.log(res.status());
        res.status(201).json(req.body);
    }

    async listar(req, res){
        const resultado = await livroModel.find({});
        res.status(200).json(resultado);
    }

    async buscarPorCodigo(req, res){
        const codigo = req.params.codigoLivro;
        const resultado = await livroModel.findOne({'codigo': codigo});
        res.status(200).json(resultado);
    }
    
    async atualizar(req, res){
        const codigoLivro = req.params.codigoLivro ;
        const livro = req.body;
        //Para obter resultado usar , {new: true} após o código;
        await livroModel.findOneAndUpdate({'codigoLivro ': codigoLivro }, livro);
        res.status(200).send('Atualizado!');
    }

    async remover(req, res){
        const codigoLivro  = req.params.codigoLivro;
        //_id é o id automaticamente gerado pelo mongo
        const _id = String((await livroModel.findOne({'codigoLivro ':codigoLivro }))._id);
        let produto = req.body;
        //método findByInAndRemove precisa do id gerado pelo mongo, para buscar e atualizar
        await livroModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}
module.exports = new LivroController();    