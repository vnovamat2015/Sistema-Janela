const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express()
const port = 4000
//app.use(require('bodyParser').json());
app.use(cors())

// Fazer uma função que chame Daos/todosBairrosDao/(const todosBairros)
app.get('/todosBairros', (req, res) => {

    res.json(todosBairros);

});

//pegar um bairro com suas coordenadas. idcard é o nome do bairro ex: CENTRO
app.get('/todosBairros/:idcard', (req, res) => {

    let bairroEncontrado = null;

    for(i=0;i<todosBairros.length;i++){
        const bairro = todosBairros[i];
        if(bairro.bairro == req.params.idcard){
            bairroEncontrado = bairro;
            break;
        }
    }
    if(bairroEncontrado){
    // fazer uma função para o Controller/Rotas.js
    
        res.json(bairroEncontrado);
    } else
     {
        res.sendStatus(404);
    }
});

app.post('/teste', (req, res) =>{
    //const teste = req.body;
    //teste.push();
    console.log(req.body);
    res.sendStatus(200);
});

//cadastrar //ROTA
app.post('/todosBairros', (req, res) => {
    const card = req.body;

    todosBairros.push(card);
    res.json(todosBairros);  
})