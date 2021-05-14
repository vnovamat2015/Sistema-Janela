const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express()
const port = 4000
app.use(bodyParser.json())
app.use(cors())


const registrosChuvaDao = require('../Daos/registrosChuvaDao')
const sensoresDao = require('../Daos/sensoresDao')

app.post('/registro-chuva', (req, res) => {
    const dadosSensor = req.body;

    sensoresDao.get(dadosSensor.ID, function(erro, sensor){
        if(erro) {
            res.send(500);
        } else {
                    
            const registroChuva = {
                "sensor": dadosSensor.ID,
                "dataHora": new Date(),
                "coordenadas": sensor.coordenadas,
                "statusChuva": dadosSensor.statusChuva
            }
            
            registrosChuvaDao.save(registroChuva, function(erro){
                if(erro) {
                    res.send(500)
                } else {
                    res.send(200);
                }
            })

        }
    })
    
});

app.get('/registros-chuva', (req, res) =>{
    
    registrosChuvaDao.list(function(err, registros){
        if(erro) {
            res.send(500)
        } else {
            res.json(registros); // status 200
        }
    })
    
});



app.listen(port, () => {
     console.log("O servidor está rodando RegistrosChuva...",);
});