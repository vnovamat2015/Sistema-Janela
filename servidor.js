const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express()
const port = 4000
app.use(bodyParser.json())
app.use(cors())
const controller = require('./controller.js');
const { todosSensores } = require('./service.js');
app.use('/',controller)
app.listen(port, () => {
  console.log("O servidor 4000 está rodando...",);
   });

