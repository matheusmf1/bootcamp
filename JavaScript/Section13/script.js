// Defining Arrays 

var res = [];
var res2 = new Array(); //uncomon

res.push( '49', true, "Hermione", null );

// push -> put on the last position
// pop -> removes from the last position

// shift -> removes from the first position
res.shift();

// unshift -> add on the first position
res.unshift("hi");

// slice -> copy parts of an array
var fruits = ["Banana", "Orange", "Apple", "Lemon"];
var fruits2 = fruits.slice(1,3);

// it's also possible to copy an entire array

var num = [1,2,3,4];
var otherNum = num.slice();
otherNum.length //literalmente quantos elementos - 4

var friendsGroup = [
  ["Harry", "Hermione", "Ron"],
  ["Malfoy","Crabbe" ],
  ["Gandalf","Dumbledore"]
];

var name = friendsGroup[2][0]