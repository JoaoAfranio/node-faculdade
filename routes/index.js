var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  global.db.listarEmpresas((error, docs) =>{
    if(error){console.log(error);}
    res.render('index', { title: "Listar Empresas", 
    docs : docs});
  })
});

router.get('/new', function(req, res) {
     res.render('new', { title: "Cadastrar Empresas"}); 
});

router.post('/new', function(req, res){
    var nome = req.body.nome;
    var endereco = req.body.endereco;
    var bairro = req.body.bairro;
    var cidade = req.body.cidade;
    var numero = parseInt(req.body.numero);
    global.db.cadastrarEmpresas({ nome, numero, endereco, bairro, cidade }, (error, resultado) => {
      if(error){ return console.log(error);}
      res.redirect('/');
    })
})

module.exports = router;
