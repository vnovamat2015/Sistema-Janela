const todosSensores = 
[{
    sensor: "TEMPERATURA-Ar",
   // coordenadas: "29° 55' 04''S  51° 11' 01''W"
},
{
sensor: "TEMPERATURA-Água",
//coordenadas: "29° 55' 04''S  51° 11' 01''W"
},
{
    sensor: "UMIDADE",
  //  coordenadas: "29° 55' 04''S  51° 11' 01''W"
},
{
    sensor: "PH",
  //  coordenadas: "29° 55' 04''S  51° 11' 01''W"
},
{
    sensor: "PPM",
   // coordenadas: "29° 55' 04''S  51° 11' 01''W"
},

{
    default:
        coordenadas = "G M S"
}]
exports.localizaSensor = function(nomesensor){
    let sensorEncontrado = []

    for(i=0;i<todosSensores.length;i++){
        const sensor = todosSensores[i];
        if(sensor.sensor == nomesensor){
            sensorEncontrado.push(sensor);
            break;
        }
    }
}
exports.listaSensores = function(){
    return todosSensores
}
