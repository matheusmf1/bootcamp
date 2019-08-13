// Higher Order Functions
// It's possible to pass a function as a parameter to another 
// function

function sing(){
  console.log("lalalala");
  console.log("lililili");
}

setInterval( sing, 1000 );


//Anonymous function
setInterval( function(){ 
  console.log("That's a anonymous func");
}, 2000);