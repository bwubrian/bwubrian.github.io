function setGreeting() {
	var today = new Date(); //unnecessary extra step for clarity lol
    var hour = today.getHours(); 

    //logically defaults to morning but in the html it starts as good day for testing 
    document.getElementById('greeting').innerHTML = "good morning";

    if(hour >= 12){  
      	document.getElementById('greeting').innerHTML = "good afternoon";
  	}

    if(hour >= 17){  
      	document.getElementById('greeting').innerHTML = "good evening";
    }

}

window.onload = function() { //on page load set the greeting based on time
  setGreeting();
  
};

//window.onbeforeunload = function(){ window.scrollTo(0,0); } //forces page to start at top when reloading, not sure if i should remove

//reveal the given class
window.sr = ScrollReveal();
sr.reveal(".navbar", { duration: 1500 }); //faaaaancy

/*
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
*/

//https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
  $(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (500) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({scrollTop: $(hash).offset().top}, 500, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

/* hardcoded but works
var revealTimer;

function revealProject(toReveal){
  console.log("reveal");
  document.getElementById("when_cows_fly_revealed").style.display = "inline";
  revealTimer = setTimeout(function(){document.getElementById("when_cows_fly_revealed").style.opacity = "1";}, 100);
  
  //document.getElementById("when_cows_fly_revealed").style.width = "200px";
}

function hideProject(toHide){
  console.log("hide");
  doTheHide();
  function doTheHide(){
    document.getElementById("when_cows_fly_revealed").style.opacity = "0";
    document.getElementById("when_cows_fly_revealed").style.display = "none";
  }
  clearTimeout(revealTimer);
  //document.getElementById("when_cows_fly_revealed").style.width = "0px";
}
*/


var revealTimer;

function revealProject(toReveal){
  console.log("reveal");
  var c = document.getElementById(toReveal).children;
  console.log(c.length);
  console.log(c[1].id);
  var childToReveal = c[1].id;

  document.getElementById(childToReveal).style.display = "inline";
  revealTimer = setTimeout(function(){document.getElementById(childToReveal).style.opacity = "1";}, 150);
  
  //document.getElementById("when_cows_fly_revealed").style.width = "200px";
}

function hideProject(toHide){
  console.log("hide");
  var c = document.getElementById(toHide).children;
  console.log(c.length);
  console.log(c[1].id);
  var childToHide= c[1].id;

  doTheHide();
  function doTheHide(){
    document.getElementById(childToHide).style.opacity = "0";
    document.getElementById(childToHide).style.display = "none";
  }
  clearTimeout(revealTimer);
  //document.getElementById("when_cows_fly_revealed").style.width = "0px";
}







// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}