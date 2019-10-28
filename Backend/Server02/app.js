const express = require('express');
const bodyParser = require('body-parser');

var received;

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res, next ) =>{
  res.send("Main Page");
});

app.get('/operacao', (req, res, next ) =>{
  res.send("Operations Page");
});

app.post('/operacao/dados',( req, res, next ) => {
  received = req.body;
  res.json(req.body);

});

app.get('/:operacao/dados',( req, res, next ) => {
  res.send(received);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});