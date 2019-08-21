// Objects 

//Creating 

var person = {
  name: "Matheus:",
  age: 21,
  city: "SCS"
}

var person = {}
person.name = "Matheus:";
person.age = 21;
person.city = "SCS";

var person = new Object();
person.name = "Matheus:";
person.age = 21;
person.city = "SCS";

console.log( person["name"] )
console.log( person.name );

//you cannot use dot notation if the property starts with number
person.1blah // invalid
person["1blah"] // valid

var str = "name";

person.str // doesn't look for name
person[str] // does evaluete str and looks for "name"


//UPDATE Data

person.age = 23;
person["age"] = 22;