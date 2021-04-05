const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express()
const port = 4000
//app.use(require('bodyParser').json());
app.use(cors())

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

app.listen(port, () => {
   
    // console.log(todosBairros)
     console.log("O servidor está rodando...",);
      });