//document.getElementById("text").innerHTML = "Right";

var count = 0;
var controlNum = 0;

var timeInterval = 1500;
var begun = 0;

function beginChange() {
	if(begun == 0){
	    myVar = window.setInterval(controlText, timeInterval);
	    count = 0;
	    document.getElementById("count").innerHTML = count;
	    begun = 1;
	}
}

function endChange(){
	clearInterval(myVar);
	begun = 0;
}


function changeText(){
	//alert("lol");
	var randomNumber = Math.floor(Math.random() * 2);
	if(randomNumber == 0){
		document.getElementById("text").innerHTML = "LEFT";
		move1a();
		count++;
	}
	else{
		document.getElementById("text").innerHTML = "RIGHT";
		move2a();
		count++;
	}
	document.getElementById("text").style.opacity = 1;
	document.getElementById("count").innerHTML = count;
}

function revertText(){
	document.getElementById("text").innerHTML = "BACK";
	document.getElementById("text").style.opacity = 0.7;
}

function controlText(){
	if(controlNum == 0){
		changeText();
		controlNum = 1;
	}else{
		revertText();
		controlNum = 0;
	}
}

function displayIntervalValue(intervalValue){
	 document.getElementById("intervalLabel").innerHTML = intervalValue;
	 timeInterval = intervalValue;
}


/*
function moveProgress(moveProgressNum) {
  var elem = document.getElementById("progressBar");   
  var displacement = 0;

  if(moveProgressNum == 0){
  	var id = setInterval(moveLeft, timeInterval/100);
  }
  function moveLeft() {
    if (displacement == 400) {
      clearInterval(id);
    } else {
      displacement+= 4; 
      elem.style.left = elem.style.left - (displacement + 'px'); 
    }
  }

  if(moveProgressNum == 1){
  	var id = setInterval(moveRight, timeInterval/100);
  }
  function moveRight() {
    if (displacement == 400) {
      clearInterval(id);
    } else {
      displacement+= 4; 
      elem.style.left = elem.style.left + (displacement + 'px'); 
    }
  }
}
*/


function move1a() {
  var elem = document.getElementById("bar1");   
  var width = 100;
  var id = setInterval(change, timeInterval/100);
  function change() {
    if (width <= 0) {
      clearInterval(id);
      move1b();
    } else {
      width--; 
      elem.style.width = width + '%'; 
    }
  }
}

function move1b() {
  var elem = document.getElementById("bar1");   
  var width = 0;
  var id = setInterval(change, timeInterval/100*0.9);
  function change() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}



function move2a() {
  var elem = document.getElementById("bar2");   
  var width = 0;
  var id = setInterval(change, timeInterval/100);
  function change() {
    if (width >= 100) {
      clearInterval(id);
      move2b();
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}

function move2b() {
  var elem = document.getElementById("bar2");   
  var width = 100;
  var id = setInterval(change, timeInterval/100*0.9);
  function change() {
    if (width <= 0) {
      clearInterval(id);
    } else {
      width--; 
      elem.style.width = width + '%'; 
    }
  }
 
}