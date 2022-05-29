        const express = require('express')
        const router = express.Router()
        const service = require('./service')
        router.get('/sensores', (req, res) => {
                res.json(service.todosSensores());
            });
        router.get('/todosSensores/:idcard', (req, res) => {
            const resultadosensorEncontrado = service.sensorEncontrado(req.params.idcard)
                if(resultadosensorEncontrado.lenght>0){
                    console.log('PASSEI NO CONTROLLER')
                    res.json(resultadosensorEncontrado);
                } else
                {
                    res.sendStatus(404);
                }
            });
         router.post('/listar', (req, res) =>{
                console.log(req.body);
                res.sendStatus(200);
            });
            module.exports =  router
 



