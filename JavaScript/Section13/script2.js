// Array iteration - For vs ForEach

var colors = ["red", "orange", "yellow","green"];

// Normal way to iterate an array
console.log("Example 1");
 for ( var i = 0; i < colors.length; i++ )
  // alert(colors[i]);
  console.log(colors[i]);



//ForEach - arr.forEach( anonymous func )
console.log("Example 2");
colors.forEach( function(color) {
  //color is a placeHolder, it holds de value of every array item
  console.log( color );
});
  
console.log("Example 3");
function printColor( color ){
  console.log("*************");
  console.log(color);
  console.log("*************");
};

colors.forEach( printColor );
//we do not pass () to the func due to Js undertands 
// that this func is need to execute on the same time of 
// but here we want to iterate over the loop and for every iteration 
// execute the func

// ForEach takes a callback function, that callback function is 
// expected to have at least 1, but up to 3, arguments.

// the first argument represents each element in the array
// the second represents the index of the elemnt
// the third represents the array that .forEach was called on

// it's able to pass an anonymous func

[1,2,3].forEach( function( el,i, arr ){
  console.log(el, i, arr);
});


// or pass a function 

function logNums(el, i, arr) {
  console.log(el, i, arr);
}
 
[1,2,3].forEach(logNums);