function checkAge(){
  var age = Number(prompt("How old are you?"));

  if ( age < 0 ){
    console.log("Error, you can't have a negative age");
  } else if ( age === 21 ){
    console.log("Happy 21st birthday");
  } else if ( age%2 != 0 ){
    console.log("Your age is odd");
  } else if(age % Math.sqrt(age) === 0) {
    console.log("Your age is a perfect square!");
  }
};
// checkAge();

function guessTheNum(){
  var num = Number(prompt("Enter some value: "));
  var secretNumber = 3;
  if ( num === secretNumber ){
    alert("You got it right");
  } else if ( num > secretNumber ){
    alert("Too hight, try again");
    guessTheNum();
  } 
  else if ( num < secretNumber ) {
    alert("Too low, try again");
    guessTheNum();
  }   
};

guessTheNum();