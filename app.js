const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express()
const port = 4000
//app.use(require('bodyParser').json());
app.use(cors())

const todosBairros = [{
    bairro: "CENTRO",
    coordenadas: "29° 55' 04''S  51° 11' 01''W"
},
{
    bairro: "FATIMA",
    coordenadas: "45° 25' 04''S 54° 16' 11''W"
},
{
    bairro: "GUAJUVIRAS",
    coordenadas: "48° 35' 04''S 56° 10' 21''W"
},
{    bairro: "NITEROI",
    coordenadas: "38° 15' 04''S 23° 11' ''W"
},
{    bairro: "MATHIAS VELHO",
coordenadas: "38° 15' 04''S 23° 11' 01''W"
},
{    bairro: "MATO GRANDE",
coordenadas: "51° 12' 48''S 29° 56' 24''W"
},
{    bairro: "NOSSA Sra. DAS GRAÇAS",
coordenadas: "51° 08' 42''S 29° 56' 28''W"
},
{    bairro: "IGARA",
coordenadas: "51° 09' 34''S 29° 53' 52''W"
},
{    bairro: "RIO BRANCO",
coordenadas: "51° 11' 06''S 29° 57' 54''W"
},
{    bairro: "HARMONIA",
coordenadas: "51° 12' 36''S 29° 56' 44''W"
},
{
    default:
        coordenadas = "G M S"
}]

//Pegar  TODOS os bairros 
app.get('/bairros', (req, res) => {

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

// Inserido Backend na Pasta Dao/bancodeDados.js
//atualizar
/*
app.put('/todosBairros/:idcard', (req, res) => {
    //let bairroEncontrado = null;
    for(i=0; i < todosBairros.length; i++){
       // const bairro = todosBairros[i];
        if(todosBairros[i].id == req.params.idcard){
            if(req.body.nome)
                todosBairros[i].nome = req.body.nome;
            if(req.body.nome)
            res.sendStatus(200);
            return;
        }
    }
      res.sendStatus(404);

})

/*excluir
app.delete('/todosBairros/:idcard', (req, res) => {

    //clientes.splice(i, 1);
    const tamanhoAntes = todosBairros.length
    clientes = todosBairros.filter(card => card.id != req.params.idcard);

    if(tamanhoAntes > todosBairros.length)
        res.sendStatus(200);
    else
        res.sendStatus(404);

})*/
///xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

app.listen(port, () => {
   
 // console.log(todosBairros)
  console.log("O servidor está rodando...",);
   });