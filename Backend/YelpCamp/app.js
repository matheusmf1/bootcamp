const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const port = process.env.PORT || 4000;

app.set( 'views', path.join( __dirname, '/views' ) );
app.set( 'view engine', 'ejs' );

app.use( bodyParser.urlencoded( { extended: true } ) );

let campgrounds = [
  { name: 'Salmon Creek', image: 'https://pixabay.com/get/57e8d1454b56ae14f6da8c7dda793f7f1636dfe2564c704c722a7edc924bc158_340.jpg' },
  { name: 'Granite Hill', image: 'https://pixabay.com/get/57e1dd4a4350a514f6da8c7dda793f7f1636dfe2564c704c722a7edc924bc158_340.jpg' },
  { name: 'Mountain Goat\' Rest', image: 'https://pixabay.com/get/57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c722a7edc924bc158_340.jpg' }
]

app.get('/', ( req, res ) => {
  res.render('landing');
})

app.get('/campgrounds', async ( req, res ) => {
  res.render('campgrounds', await { campgrounds: campgrounds }); 
});

app.post('/campgrounds', ( req, res ) => {
  const name = req.body.name;
  const image = req.body.image;
  let newCampGround = { name: name , image: image };
  campgrounds.push( newCampGround );

  res.redirect('/campgrounds');
});

app.get('/campgrounds/new', ( req, res ) => {
  res.render('new.ejs');
})


app.listen( port, ( err ) => {
  if ( err ) {
    console.error( err );
  } else {
    console.log( `App listening at port: ${port}` );
  }
});