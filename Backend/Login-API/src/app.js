const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: false } ) );

require( './app/controllers/index' )(app);
//repassa para o controler o app

app.listen( 4000 );