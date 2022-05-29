const dao = require ('./dao.js')

exports.sensorEncontrado = function(nomesensor){
  const resultado = dao.localizaSensor(nomesensor)
  return resultado
}

exports.todosSensores = function(){
    const resultado = dao.listaSensores()
       return resultado
}




