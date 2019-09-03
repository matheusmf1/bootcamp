//-getElementById returns a Js object with that specific id from html
var tag = document.getElementById("highlight");


//-getElementsByClassName returns a HTMLCollection, it's a list not an array
// we can access it using index position
var tags = document.getElementsByClassName("bolded");
console.log(tags[0]);

var tags = document.getElementsByTagName("li");
console.log(tags[0]);


//-querySelector
// returns the FIRST element that matches a given CSS-style selector

//select by id
var tag = document.querySelector("#highlight");

//select by class
var tag = document.querySelector(".bolded");

//select by tag
var li = document.querySelector("li");

var li = document.querySelector("li a.special");


//-querySelectorAll
// returns all elements not just the first - NodeList

var tags = document.querySelectorAll("li");