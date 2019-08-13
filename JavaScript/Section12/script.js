// function declaration
function capitalize( str ){
  if( typeof(str) === "number" )
    return;
  return str.charAt(0).toUpperCase() + str.slice(1);  
}
// function expression
var cap = function ( str ){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

cap("matheus");

function isEven(num){
  if ( num%2 === 0 )
    return true;
  else 
    return false;  
}

function factorial(num){
  if ( num === 0 )
    return 1;
  else 
    return num*factorial(num-1);
}

function kebabToSnake( str ){
  // replace '-'to '_'
  var newStr = str.replace(/-/g,"_");
  return newStr;
}