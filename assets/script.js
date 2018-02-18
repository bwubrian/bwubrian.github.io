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


window.sr = ScrollReveal();

sr.reveal(".foo", { duration: 2000 }); //faaaaancy

