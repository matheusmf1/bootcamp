const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: false } ) );

app.set( 'views', path.join( __dirname, './frontend/views' ) );
app.use( express.static( path.join( __dirname, '../public' ) ) );

app.set( 'view engine', 'ejs' );

require( './app/controllers/index' )(app);
//repassa para o controler o app

app.get( '/', ( req, res ) => {
  res.status(200).render('home');
});

app.listen( 4000 );