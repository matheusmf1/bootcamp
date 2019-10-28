const express = require('express');
const bodyParser = require('body-parser');
const sender = require('./Sender');
const app = express();

app.use(bodyParser.json());


app.get('/', (req, res, next ) =>{
  res.send("Main Page");
});

app.get('/operacao', (req, res, next ) =>{
  res.send("Operations Page");
});

app.post('/operacao/dados',( req, res, next ) => {
  var operacao  = req.body.operacao;
  var dados = req.body.dados; 
  sender.sendData( operacao, dados, res );
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});