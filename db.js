var conexao = require("mongodb").MongoClient;

conexao.connect("mongodb://localhost:27017/empresa")
.then(conn => global.conn = conn.db("empresa"))
.catch(error => console.log(error))


function listarEmpresas(callback){
    global.conn.collection("dadosempresa").find({}).toArray(callback);
}

function cadastrarEmpresas(dados, callback){
    global.conn.collection("dadosempresa").insert(dados, callback);
}

module.exports = { listarEmpresas, cadastrarEmpresas }