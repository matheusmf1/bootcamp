// Scope refers to the context that code is executed in
// A function has it's own scope, variables inside of it can't be accessed on the global scope
// When a variable is defined outside the function, it's possible to access it inside of it

//When you have a variable declared on the global scope and use the same variable
//without declaring it (var) on a function to modify it's value, the variable on the global scope
// gets changed. This occurs because the function did not declared that variable,
// which means that Js will look on it's "parent", this case global scope 
//to see if the declaration is there.

  var num = 8;
  function doMath(){
    num++;
    if(num%5 == 0)
      return true;
    else
      false;
  }
  
  num++;
  doMath();