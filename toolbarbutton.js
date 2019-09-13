
  function myFunction() {
    var x = document.getElementById("Bod");
    var y = document.getElementById("sub-items");
    if (x.className === "page-home"  ) {
      x.className += " responsive";
	
    } else {
      x.className = "page-home";

    }
	if (y.className === "sub-items is-expanded"  ) {
      y.className = " sub-items";
	
    } 
  }
  function expandsubitems() {
    var x = document.getElementById("sub-items");
   
    if (x.className === "sub-items"  ) {
      x.className += " is-expanded";
	
    } else {
      x.className = "sub-items";

    }
  }
