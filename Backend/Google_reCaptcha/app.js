const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const secretKey = 'ServerKey';

const app = express();

app.use( bodyParser.urlencoded( { extended:false } ) );
app.use( bodyParser.json() );
app.use( express.static('public') );

app.set( 'view engine', 'ejs' );

app.get( '/', ( req, res ) =>{
  res.render('index');
});

app.post( '/verify', ( req, res ) => {
  
  if( !req.body.captcha )
    res.json( { 'msg':'captcha token is undefined' } )

  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.captcha}`;

  request( verifyUrl, ( err, response, body ) => {

    if ( err )
      console.log( err );

    body = JSON.parse( body );

    // Here is the threshold 
    if ( !body.success || body.score < 0.4 ){
      return res.json( { 'msg':'You might be a robot, sorry', 'score': body.score } );
    }

    return res.json( { 'msg':'You have been verified', 'score': body.score } )
  });

});

app.listen( 4000, () =>{
  console.log( 'app is running on port 4000' );
});