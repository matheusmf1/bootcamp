var tag = document.getElementById("highlight");

//manipulate - This is not a DRY code 
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";

/* There is a better way, rather than directly manipulate style with js, 
 we can define a CSS class and then toggle it on or off.

 Define a class in the css
  .some-class {
    color: blue;
    border: 10px solid red;
  }  

  .another-class{
    color:purple;
    fontSize: 76px;
  }
*/

// Add some CSS Class to the element
tag.classList.add("some-class");

var tag = document.querySelector("h1");

tag.classList.add("another-class");

// Remove some CSS Class from the element
tag.classList.remove("another-class");

// Toggle a class
tag.classList.toggle("another-class")