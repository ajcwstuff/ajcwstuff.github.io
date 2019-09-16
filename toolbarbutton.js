
  function closeMenu() {
    var x = document.getElementById("Bod");
    var y = document.getElementById("sub-items");
    if (x.className === "page-home"  ) {
      x.className += " responsive";
	
    } else {
      x.className = "page-home";

    }
	if (y.className === "sub-items is-expanded" || y.className ==="sub-items" ) {
      y.className = "dropdown-content";
	
    } 
  }
  function expandsubitems() {
    var x = document.getElementById("sub-items");
   
    if ((x.className === "sub-items" || x.className==="dropdown-content") && document.documentElement.clientWidth <= 700 ) {
      x.className = "sub-items is-expanded";
	
    } else if (document.documentElement.clientWidth <= 700) {
      x.className = "sub-items";

    }
  }
