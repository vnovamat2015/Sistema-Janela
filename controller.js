const express = require('express')
const router = express.Router()
const service = require('./service')



//Pegar  TODOS os bairros 
router.get('/bairros', (req, res) => {
    res.json(service.todosBairros());
});

//pegar um bairro com suas coordenadas. idcard é o nome do bairro ex: CENTRO
router.get('/todosBairros/:idcard', (req, res) => {

const resultadobairroEncontrado =service.bairroEncontrado(req.params.idcard)
    if(resultadobairroEncontrado.lenght>0){
         res.json(resultadobairroEncontrado);
    } else
     {
        res.sendStatus(404);
    }
});
router.post('/relatorio', (req, res) =>{
    //const teste = req.body;
    //teste.push();
    console.log(req.body);
    res.sendStatus(200);
});
module.exports = router

