/* Functions that are initilised when page loads */
document.addEventListener('DOMContentLoaded', function() {
   typeWriter();
}, false);

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
  if(window.pageYOffset !== 0) {
    x.style.backgroundColor =  "#3b5998";
  }
  else {
    x.style.backgroundColor = "transparent";
  }
}

/* My typewriter animation */
var i = 0;
var j = 0;
var txt = ['enjoys long walks on the beach.',
           'appreciates the occassional meme.',
           'creating apps.',
           'enjoys learning code!'];
var speed = 50;
var timer;

/* Prints out each character for each line in array */
function typeWriter() {
  if (i < txt[j].length) {
    document.getElementById("subHeading").innerHTML += txt[j].charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else if (i === txt[j].length) {
    cursor();
    /* Stops typeWriter once reach end of text array */
    if(j === txt.length-1) {return;}
    setTimeout(deleteTxt, 2500);
  }
}
/* Removes the last character for the sentence until there's none */
function deleteTxt() {
  /* Keeps the cursor solid color */
  var x = document.getElementById("cursor");
  clearInterval(timer);
  x.style.color = "black";
  if(i > 0) {
    document.getElementById("subHeading").innerHTML = txt[j].substring(0, i - 1);
    i--;
    setTimeout(deleteTxt, speed/2);
  }
  else if(i === 0) {
    setTimeout(typeWriter, 500);
    j++;
  }
}

function cursor() {
  var x = document.getElementById("cursor");
  x.style.color =  "transparent";
  timer = setInterval(function() {
    if(x.style.color == "black") {
      x.style.color =  "transparent";
    }
    else {
      x.style.color = "black";
    }
  }, 530);
}
