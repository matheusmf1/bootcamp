const echo = ((msg,n) =>{
  for( var i = 1; i <= n; i++ )
    console.log(msg);
});


echo("Hi there",5);


var avarege = ((arr) =>{
  sum = 0;
  arr.forEach( (score) =>{
      sum+=score;
  });
  return Math.round(sum/arr.length);
});


const scores = [90,98,89,100,100,86,94];
console.log(avarege(scores));