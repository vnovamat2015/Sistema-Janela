const { lutimes } = require("fs");

const sensores = [{
    "ID": 12345,
    "coordenadas": "29° 55' 04''S 51° 11' 01''W",
},{
    "ID": 234567,
    "coordenadas": "29° 55' 04''S 51° 11' 02''W",
},{
    "ID": 345678,
    "coordenadas": "29° 55' 04''S 51° 11' 31''W",
}]


exports.list = function(callback) {

     try {
        // criar uma conexão com o banco de dados
        // fazer uma consulta de todos os registros no banco de dados
        callback(null, sensores);
    } catch (erro) {
        callback(erro);
    }
    callback();
}

exports.get = function(id, callback) {

    try {
       // criar uma conexão com o banco de dados
       // fazer uma consulta de um sensor pelo ID no banco de dados
       let sensorEncontrado = null;
       for(i=0;i<sensores.length;i++){
           if(sensores[i].ID == id){
                sensorEncontrado = sensor[i];
                break;
           }
       }
       if(sensorEncontrado){
           callback(null, sensorEncontrado)
       } else {
           callback("Sensor não encontrado");
       }
   } catch (erro) {
       callback(erro);
   }
   callback();
}
