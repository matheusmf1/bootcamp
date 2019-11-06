const express = require('express');

const app = express();
const port = process.env.PORT || 3300;

// this will tell express to surve the public content. By default only views are enabled.
app.use( express.static('public') );

// this will tell express that the files from render are ejs files
app.set( 'view engine', 'ejs' );

// routes

app.get('/', ( req, res ) => {
  res.render('home');
})

app.get('/test/:thing', ( req, res ) => {
  var thing = req.params.thing;
  res.render('test', {thingVar: thing});
  // it's passing an object to the file, saying that the 'thingVar' from inside is iqual to 'thing' variable
})

app.get('/posts', ( req, res ) => {
  var posts = [
    { title: "Post1", author: "Matheus"},
    { title: "Post2", author: "user2"},
    { title: "Post3", author: "user3"},
    { title: "Post4", author: "user4"},
  ];

  res.render('post', { postsIn: posts });
});

app.listen( port, ( err ) => {
  if ( err ) {
    console.error( err );
  } else {
    console.log( `App listening at port: ${port}` );
  }
});