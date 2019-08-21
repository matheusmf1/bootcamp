function printReverse( arr ){
  for ( var i = arr.length-1; i >= 0; i-- )
    console.log( arr[i]);
};


function isUniform( arr ){
 var element = arr[0];
 for ( var i = 1; i < arr.length; i++ )
    if( arr[i] !== element )
      return false;
  return true;
}

// This solution has a problem, it will stop when find
//some diferent item, it'll return false from the anonymous func 
//and then return true from the main func.

// function isUniform( arr ){
//   var element = arr[0];
//   arr.forEach( function( item ){
//     if ( item !== element )
//       return false;
//   });
  // return true;
// }


function someArray( arr ){
  var count = 0;
  arr.forEach( function( num ){
        count+=num;
  });
  return count;
}

function max( arr ){
  var max = 0;
  arr.forEach( function(num){
    if ( num > max )
      max=num;
  });
  return max;
}