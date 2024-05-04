const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://Admin:Admin@intranet.dclizxs.mongodb.net/';
let singleton;

async function connect() {
    if (singleton) return singleton;
    let client = new MongoClient(url);
    singleton = client.db('Intranet');
    return singleton;
}

module.exports = async function procurarUsuario(nomeUsuario, senhaUsuario) {
    let db = await connect();
    let resultado = await db.collection("usuarios").findOne({ nome: nomeUsuario })
    console.log(resultado);
    return resultado;
}
//Teste se esta funcionado, apagar depois
procurarUsuario('Admin', 'Admin');