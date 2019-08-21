/* Some (chrome) browser behaves a little strangely when using alert, prompt, or confirm functions. 
It doesn't display the HTML on the page until after the popup has been closed. 
This is problematic since our HTML contains instructions for the user to be able to use the app we're building.
You can avoid this by wrapping your JS code in the following setTimeout function:

window.setTimeout( function() {

}, 500 );

This gives the HTML a half second to load before running the JS, which circumvents 
the issue of the prompt function blocking the HTML from loading right away. */

var todos = ["oi1","oi2","oi3","oi4"];

window.setTimeout( function() {
var input = prompt("What would you like to do?")

while ( input !== "quit" ) {
  if ( input === "list" )
    listItem();

  else if ( input === "new" )
    addItem();

  else if ( input === "delete" )
    deleteItem();
     
  var input = prompt("What would you like to do?") 
}
console.log("Quit, ok");
},500);



function listItem(){
  console.log("*************");
    todos.forEach( function(item, i, todos) {
      console.log("Item: " + item, "Index: " + i, "Array: " + todos);
    });
  console.log("*************");
};

function addItem(){
  var newTodo = prompt("Enter new Todo: ")
    todos.push(newTodo);    
}

function deleteItem(){
  var item = prompt("Enter the item do delete");
    if ( todos.includes(item) ){
      var index = todos.indexOf(item); 
      todos.splice( index, 1 );
      console.log("Item deleted");
    }
    else{
      console.log("Item not found");
    }
};
