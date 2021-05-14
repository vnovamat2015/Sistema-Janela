const registrosChuva = []

exports.save = function(registroChuva, callback) {

     try {
        // criar uma conexão com o banco de dados
        // fazer um insert do regitroChuva no banco de dados
        registrosChuva.push(registroChuva); // simulação de um banco de dados
        callback();
    } catch (erro) {
        callback(erro);
    }
    callback();
}


exports.list = function(callback) {

     try {
        // criar uma conexão com o banco de dados
        // fazer uma consulta de todos os registros no banco de dados
        callback(null, registrosChuva);
    } catch (erro) {
        callback(erro);
    }
    callback();
}
