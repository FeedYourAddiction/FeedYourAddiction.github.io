/* Toggle between adding and removing the "responsive" class to topnav when the
   user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    var y = document.getElementById("rTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
        y.className += " responsive";
    } else {
        x.className = "topnav";
        y.className = "navRight"
    }
}

/* Toggle between a solid and transparent color to topnav when the user scrolls
   to the top */
function checkTop() {
  var x = document.getElementById("myTopnav");

  if(document.body.scrollTop !== 0) {
    x.style.backgroundColor =  "#333";
  }
  else {
    x.style.backgroundColor = "transparent";
  }
}
