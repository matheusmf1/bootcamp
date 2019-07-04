
function getToKnownUser(){
  var userFirstName = prompt("What's your firt name darling?");
  var userLastName = prompt("What's your last name darling?");
  var userAge = prompt("How old are you?"); 
  alert("Hi there: " + userFirstName + " "+ userLastName);
  alert("Nice to meet you, " + userFirstName + ", Age: "+ userAge);
};

//getToKnownUser();

function getDaysAlive(){
  var userAge = prompt("How old are you?"); 
  var daysAlive = userAge*365;
  alert("You've been alive for " + daysAlive + " days");
};

getDaysAlive();