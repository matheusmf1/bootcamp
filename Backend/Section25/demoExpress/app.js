const express = require("express")
const app = express()

// Routes
// "/" => "hi there"
app.get("/", function(req, res){
  res.send("Hi there!"); 
});

// "/bye" => "Goodbye"
app.get("/bye",function(req, res){
  res.send("Goodbye");
});

// "product" => "Macbook Pro"
app.get("/product",function(req, res){
  res.send("MacbookPro");
});


// Listen for requests (start server)
// This way works on my container at goorm.io
// app.listen(process.env.PORT, process.env.IP, function(){
//   console.log("Server has Started")
// } );

// This way on computer
app.listen(3000, function() { 
  console.log('Server listening on port 3000'); 
});