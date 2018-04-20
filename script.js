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
    x.style.backgroundColor =  "#3b5998";
  }
  else {
    x.style.backgroundColor = "transparent";
  }
}

/* My typewriter animation */
var i = 0;
var j = 0;
var txt = ['Lorem ipsum dummy text blabla.', 'just testing if this works', 'might apply this to my page', 'hope this is easy to implement', 'otherwise im fooked'];
var speed = 50;
test();

function test() {
  document.getElementById("subHeading").innerHTML = "terst";
}
function typeWriter() {
  if (i < txt[j].length) {
    document.getElementById("subHeading").innerHTML += txt[j].charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else if (i === txt[j].length) {
    setTimeout(deleteTxt, 1000);
  }
}

function deleteTxt() {
  if(i > 0) {
    document.getElementById("subHeading").innerHTML = txt[j].substring(0, i - 1);
    i--;
    setTimeout(deleteTxt, speed);
  }
  else if(i === 0) {
    setTimeout(typeWriter, 500);
    j++;
    if(j === txt.length) {
      j = 0;
    }
  }
}
