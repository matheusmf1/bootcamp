const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3300;

app.set( 'view engine', 'ejs' );
app.use( bodyParser.urlencoded( { extended:true } ) );

app.listen( port, ( err ) => {
  if ( err ) {
    console.error( err );
  } else {
    console.log( `App listening at port: ${port}` );
  }
});

// to solve the scope issues
var friends = ["Tony", "Steve Rogers", "Stephen-Strange", "Loki", "Thor"];

// routes 

app.get('/', ( req, res ) => {
  res.render('home');
});

app.get('/friends', ( req, res ) =>{
  res.render('friends', { friends:friends });
});

app.post( '/addfriend', ( req, res ) =>{
  console.log(req.body);
  var newFriend = req.body.newname;
  friends.push( newFriend );
  // res.send( "You have reached the post route" )
  // insted of seing the above message/ send or render
  // redirect will redirect to the passed route
  res.redirect('/friends')
});