const pessoas = require('../db/mongoDB');
class PessoaController {
listar(req, res){
    res.json(pessoas);
}
buscarPorId(req, res){
const pessoa = pessoas.find(p => p.id == req.params.id);
res.json(pessoa);
}
salvar(req, res){
    pessoas.push(req.body);
    res.json(pessoa);
    }
atualizar(req, res){
    const pessoa = req.body;
    const indice = pessoas.findIndex(p => p.id == req.params.id);
    if(indice >= 0){
        pessoas[indice] = pessoa;
    } else {
        pessoas.push(pessoa);
    }
    res.json(pessoa);
}
remover(req, res){
    const indice = pessoas.findIndex(p => p.id == req.params.id);
    if(indice >= 0){
      pessoas.splice(indice, 1);
    }
    res.status(204).end();
}

};

module.exports = new PessoaController();