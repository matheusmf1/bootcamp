//While loop lecture

function printNum(){
  var num = -10;
  console.log("Print numbers between -10 and 19");
  while ( num <= 19 ){
    console.log(num);
    num++;
  }
}

function printEvenNum(){
  var num = 10;
  console.log("Print Even Numbers between 10 and 40");
  while ( num <= 40 ){
    if ( num % 2 === 0 )
      console.log(num);       
    num++;
  }
}

function printOddNum(){
  var num = 300;
  console.log("Print Odd Numbers between 300 and 333");
  while ( num <= 333 ){
    if ( num % 2 !== 0 )
    console.log(num);       
  num++;
  }
}

function printDivisable(){
  var num = 5;
  console.log("Print Numbers divided by 3 and 5 between 5 and 50");
  while( num <= 50 ){
    if ( num%3 === 0 && num%5 === 0){
      console.log(num);
    }
    num++;    
  }
}

// printNum();
// printEvenNum();
// printOddNum();
// printDivisable();

//For loops lecture 
 
function printNum(){
  console.log("Print numbers between -10 and 19");
  for ( var i = -10; i < 20; i++ ){
    console.log(i);
  }
}

function printEvenNum(){
  console.log("Print Even Numbers between 10 and 40");
  for ( var i = 10; i <= 40; i++ ){
    if ( i % 2 === 0 )
      console.log(i);   
  }
}

function printOddNum(){
  console.log("Print Odd Numbers between 300 and 333");
  for( var i = 300; i <= 333; i++ ){
    if ( i % 2 !== 0 )
      console.log(i);    
  }
}

function printDivisable(){
  console.log("Print Numbers divided by 3 and 5 between 5 and 50");
  for ( var i = 5; i <= 50; i++ ){
    if ( i%3 === 0 && i%5 === 0)
      console.log(i);
  }
}

printNum();
printEvenNum();
printOddNum();
printDivisable();