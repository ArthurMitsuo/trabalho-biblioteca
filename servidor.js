const express = require('express');
const srv = express();
srv.use(express.json());

srv.get('/', function(req, res) 
    {
        res.send('Resposta em srv.get(/)');
    }
);

srv.listen(3000, function() 
    {
    console.log('Servidor rodando na porta 3000!');
    }
);

srv.get('/', function(req, res) 
    {
        res.send('srv.get()');
    }
);
    srv.post('/', function(req, res) 
    {
        res.send('srv.post()');
    }
);
    srv.put('/', function(req, res) 
    {
        res.send('srv.put()');
    }
);
    srv.delete('/', function(req, res) 
    {
        res.send('srv.delete()');
    }
);